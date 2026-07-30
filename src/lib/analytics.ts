/* Visits, what got clicked, how long each page held attention — written straight
   to Supabase rather than through a third-party analytics vendor, because the real
   question is never "how much traffic" for a site with a handful of visitors a
   month. It's "did the person this link was sent to open it, and which case did
   they actually read."

   The anon key below is meant to be public — it ships in every Supabase project's
   client bundle by design, and Supabase's security model puts the boundary at row
   level security, not at hiding the key. The table this writes to (site_events)
   has one policy: anon may INSERT, nobody may SELECT. Pulling the key out of this
   file gets a stranger the ability to add rows, never to read anyone else's. Reads
   happen from the Supabase SQL editor, under the project owner's session, which
   isn't bound by RLS at all. */
const SUPABASE_URL = "https://crvrckpnksobktvqyokp.supabase.co";
const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNydnJja3Bua3NvYmt0dnF5b2twIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3NDg0ODEsImV4cCI6MjA2MTMyNDQ4MX0.CCIaHjQA7UiqX5_Ck0GI1kx-91surYxp1niwQJtKHzM";

type Row = {
    session_id: string;
    kind: "pageview" | "duration" | "click";
    path?: string;
    label?: string;
    value?: number;
    referrer?: string | null;
    src?: string | null;
    device: "mobile" | "desktop";
};

const now = () => performance.now();

/* One id per tab, gone when the tab closes — sessionStorage rather than
   localStorage on purpose. There's no reason to be able to tell that the same
   person came back next week, only that these ten events during this visit were
   one person's. */
const sessionId = (() => {
    const KEY = "site_session_id";
    try {
        const existing = sessionStorage.getItem(KEY);
        if (existing) return existing;
        const id = crypto.randomUUID();
        sessionStorage.setItem(KEY, id);
        return id;
    } catch {
        /* Private browsing can refuse storage. A fresh id per event is worse than
           one per tab, but it's better than throwing. */
        return crypto.randomUUID();
    }
})();

/* Same 1024px split Work.tsx already uses for its own layout switch. */
const device: Row["device"] = window.innerWidth < 1024 ? "mobile" : "desktop";

/* Read once, at the first event of the session, and cached from then on. Both are
   only meaningful on the visit that actually arrived from outside: react-router
   navigation between case pages never touches document.referrer, and a Link to
   "/case/datox" carries no query string, so ?src= would read as null on every page
   after the first if this weren't pinned down at session start. */
const firstTouch = (() => {
    const KEY = "site_first_touch";
    try {
        const existing = sessionStorage.getItem(KEY);
        if (existing) return JSON.parse(existing) as { referrer: string | null; src: string | null };
        const value = {
            referrer: document.referrer || null,
            src: new URLSearchParams(window.location.search).get("src"),
        };
        sessionStorage.setItem(KEY, JSON.stringify(value));
        return value;
    } catch {
        return { referrer: document.referrer || null, src: new URLSearchParams(window.location.search).get("src") };
    }
})();

/* fetch with keepalive, not sendBeacon: sendBeacon can't carry the apikey/
   Authorization headers Supabase's REST endpoint requires, only a bare body.
   keepalive fetch does the same job — the request outlives the page that started
   it — while still being a normal fetch. */
const send = (row: Omit<Row, "session_id" | "device">) => {
    const body: Row = { session_id: sessionId, device, ...row };
    fetch(`${SUPABASE_URL}/rest/v1/site_events`, {
        method: "POST",
        keepalive: true,
        headers: {
            "Content-Type": "application/json",
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(body),
    }).catch(() => {
        /* A blocked request (an ad blocker treating this like tracking, which it
           is) should never be visible to the person browsing. */
    });
};

/* ── Time on page, counted only while the tab is actually visible ──

   The site's own browser preview sat with document.hidden true for long stretches
   earlier in this project, and every rAF-driven animation on the page froze while
   it did. The same freeze means a naive Date.now()-at-mount, Date.now()-at-unmount
   measurement would count a tab left open in the background overnight as eleven
   hours of reading. This only accumulates time between a visible-start and the
   next hidden/hidden-equivalent moment. */
let currentPath: string | null = null;
let visibleSince: number | null = null;

const flushDuration = () => {
    if (currentPath === null || visibleSince === null) return;
    const elapsed = Math.round(now() - visibleSince);
    visibleSince = null;
    if (elapsed < 250) return; // a glance, not a read
    send({ kind: "duration", path: currentPath, value: elapsed, ...firstTouch });
};

export const enterPath = (path: string) => {
    flushDuration();
    currentPath = path;
    visibleSince = document.visibilityState === "visible" ? now() : null;
    send({ kind: "pageview", path, ...firstTouch });
};

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        flushDuration();
    } else if (currentPath !== null && visibleSince === null) {
        visibleSince = now();
    }
});

/* Fires on tab close and on navigating to a different origin — clicking through to
   datox.ai, for instance — which is exactly the moment a route change inside the
   app never produces, so it needs its own flush. */
window.addEventListener("pagehide", flushDuration);

/* ── Clicks worth knowing about, matched by delegation rather than instrumented
   one by one. Checked in order; the first match wins, so a click is never counted
   twice. */
const CLICK_RULES: { selector: string; label: (el: Element) => string }[] = [
    { selector: 'a[href="/cv-artem-sokolov.pdf"]', label: () => "cv_download" },
    { selector: 'a[href="https://datox.ai"]', label: () => "visit_datox" },
    { selector: "[data-return]", label: () => "back_to_work" },
    /* Whether the frame that was expanded held a video or a still screenshot —
       see ShotBadge.tsx, which reads the same DOM shape for the same reason. */
    {
        selector: '[aria-label^="Open full size"]',
        label: (el) => (el.querySelector("video") ? "lightbox_open_video" : "lightbox_open_image"),
    },
    {
        selector: 'a[href^="/case/"]',
        label: (el) => `open_case:${el.getAttribute("href")?.split("/").pop()}`,
    },
];

document.addEventListener(
    "click",
    (e) => {
        const target = e.target as Element | null;
        if (!target) return;
        for (const rule of CLICK_RULES) {
            const match = target.closest(rule.selector);
            if (match) {
                send({ kind: "click", path: currentPath ?? undefined, label: rule.label(match), ...firstTouch });
                return;
            }
        }
    },
    true,
);

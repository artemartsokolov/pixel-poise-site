/* The gate, moved to the edge.

   There was a gate before this one, written in React. It looked the same and
   stopped nobody: the check ran in a bundle the server handed out to anyone who
   asked, so the code sat in plain text inside it, and so did every word of every
   case study. Reading it took one view-source. A gate that ships to the visitor
   is a sign on a door, not a lock.

   This runs before anything is served. Without the cookie the bundle is never
   sent, which is what makes the difference: the code, the case text and the
   storage paths are all inside that bundle, and none of them leave the server
   until someone has proved they have the code.

   It also stands in front of the media. Every screenshot and screen recording used
   to be a public Supabase URL, so the gate protected the site but not its contents:
   a path noted down earlier still returned the file to a bare curl. They are all
   /m/... now, which lands here, behind the same cookie, and gets signed below.

   The signing lives in this file rather than a function under /api because a
   function under /api never ran — Vercel served the SPA fallback for it instead —
   while this middleware demonstrably works. One edge function doing both jobs is
   also simply less to keep alive. */

export const config = {
    /* Everything except what has to stay reachable for the site to be shareable
       at all: the favicon, the Open Graph image that Slack and LinkedIn fetch when
       the link is pasted (those crawlers have no cookie and never will), and
       robots.txt, which has to stay readable for the noindex rules to be honoured. */
    matcher: ["/((?!favicon\\.ico|favicon\\.svg|og-image\\.jpg|robots\\.txt).*)"],
};

const CODE = (process.env.ENTRY_CODE || "ZENITH").toUpperCase();
const COOKIE = "entry";

/* A year, because the alternative is a recruiter who opened the link last week
   being asked for the code again when they come back to it. */
const MAX_AGE = 60 * 60 * 24 * 365;

const gate = (wrong: boolean) => `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>Artem Sokolov</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{min-height:100vh;background:#F5F3EE;color:#141414;
       font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
       display:flex;flex-direction:column;justify-content:space-between;
       padding:2.5rem 2rem;font-size:14px;line-height:1.5}
  @media(min-width:1024px){body{padding:3.5rem 4rem}}
  .who{font-size:14px;font-weight:300;color:#6b7280}
  main{max-width:640px;margin-top:-4rem}
  .eyebrow{font-size:12px;letter-spacing:.15em;text-transform:uppercase;color:#6b7280;margin-bottom:1.5rem}
  h1{font-size:2.25rem;font-weight:300;letter-spacing:-.02em;line-height:1.08;margin-bottom:2.5rem}
  @media(min-width:1024px){h1{font-size:3.5rem}}
  h1 .muted{color:#9ca3af}
  input{font:inherit;font-size:1.75rem;font-weight:300;letter-spacing:.5em;
        background:none;border:none;border-bottom:1px solid rgba(20,20,20,.25);
        padding:.4em 0;width:100%;max-width:9em;color:#141414;outline:none;
        text-transform:uppercase}
  input:focus{border-bottom-color:#141414}
  input.wrong{border-bottom-color:#8C4A4A;animation:shake .32s cubic-bezier(.36,.07,.19,.97)}
  @keyframes shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-6px)}
    40%{transform:translateX(5px)}60%{transform:translateX(-3px)}80%{transform:translateX(2px)}}
  .hint{margin-top:1.5rem;font-size:14px;font-weight:300;color:#6b7280}
  .hint.wrong{color:#8C4A4A}
  footer{font-size:12px;font-weight:300;color:#9ca3af}
</style></head>
<body>
  <p class="who">Artem Sokolov</p>
  <main>
    <p class="eyebrow">Private</p>
    <h1>Selected work,<br><span class="muted">by invitation.</span></h1>
    <form method="GET" action="/">
      <label for="k" style="position:absolute;left:-9999px">Access code</label>
      <input id="k" name="k" autofocus autocomplete="off" autocorrect="off"
             spellcheck="false" maxlength="${CODE.length}"
             class="${wrong ? "wrong" : ""}">
      <p class="hint ${wrong ? "wrong" : ""}">${
          wrong ? "Not that one. Try again." : "The code came with the link."
      }</p>
    </form>
  </main>
  <footer>Design Engineer · Spain</footer>
<script>
  var i = document.getElementById('k');
  i.addEventListener('input', function () {
    i.classList.remove('wrong');
    if (i.value.length === ${CODE.length}) i.form.submit();
  });
</script>
</body></html>`;

/* ── Media ──

   Signed and redirected, never proxied. ai-bot.mp4 is 21MB, partners-demo 20MB,
   financier 19MB, and an edge function may not return anything like that, so
   streaming the bytes through here would fail on precisely the files most worth
   protecting. Redirecting also leaves 47MB of media on Supabase's CDN rather than
   Vercel's bandwidth, and keeps range requests working, which is what <video>
   needs in order to seek.

   The service key is read from the environment and never enters the bundle. That
   is the difference between doing this here and doing it in the client: with a key
   in the browser, anyone through the gate once could keep fetching media forever
   without it. */
const SUPABASE_URL = "https://crvrckpnksobktvqyokp.supabase.co";
const BUCKET = "portfolio";
const SIGN_TTL = 60 * 60;

const media = async (path: string) => {
    /* Nothing but the bucket's own files: without this, ".." in a path is an
       invitation to walk out of the bucket. */
    if (!path || path.includes("..")) return new Response("Not found", { status: 404 });

    const key = process.env.SUPABASE_SERVICE_KEY;

    /* No key configured yet. While the bucket is still public the public URL is the
       same file, so fall through to it rather than leave the site with no images.
       Once the bucket is private this stops resolving, which is the correct
       failure — by then a missing key is a misconfiguration, not a sequencing gap. */
    if (!key) {
        return new Response(null, {
            status: 302,
            headers: {
                Location: `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${path}`,
                "Cache-Control": "no-store",
            },
        });
    }

    const signed = await fetch(`${SUPABASE_URL}/storage/v1/object/sign/${BUCKET}/${path}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({ expiresIn: SIGN_TTL }),
    });

    if (!signed.ok) {
        return new Response("Not found", { status: signed.status === 400 ? 404 : 502 });
    }

    const { signedURL } = (await signed.json()) as { signedURL: string };

    return new Response(null, {
        status: 302,
        headers: {
            Location: `${SUPABASE_URL}/storage/v1${signedURL}`,
            /* Comfortably inside the signature's own life, so a cached redirect can
               never hand back a URL that has already expired. */
            "Cache-Control": `private, max-age=${SIGN_TTL - 600}`,
        },
    });
};

export default async function middleware(request: Request) {
    const url = new URL(request.url);
    const cookies = request.headers.get("cookie") ?? "";
    const inside = cookies.split(/;\s*/).includes(`${COOKIE}=${CODE}`);

    /* Media is checked after the cookie and before anything else, so a screenshot
       is exactly as private as the page that shows it. */
    if (url.pathname.startsWith("/m/")) {
        if (!inside) return new Response("Not found", { status: 404 });
        return media(url.pathname.slice(3));
    }

    /* Already let in on a previous request. */
    if (inside) return;

    const supplied = url.searchParams.get("k");

    if (supplied?.toUpperCase() === CODE) {
        /* Take the code out of the address bar before the page renders, so it does
           not survive a screenshot, a copied URL or the browser history. Everything
           else in the query string is kept — ?src= is how a visit gets attributed
           to the application it came from. */
        url.searchParams.delete("k");
        return new Response(null, {
            status: 302,
            headers: {
                Location: url.pathname + url.search + url.hash,
                "Set-Cookie":
                    `${COOKIE}=${CODE}; Path=/; Max-Age=${MAX_AGE}; SameSite=Lax; Secure; HttpOnly`,
            },
        });
    }

    /* 401 rather than 200: this is a refusal, and search engines and link
       previewers should read it as one. */
    return new Response(gate(supplied !== null), {
        status: 401,
        headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "no-store",
            "X-Robots-Tag": "noindex, nofollow",
        },
    });
}

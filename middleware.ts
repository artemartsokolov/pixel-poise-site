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

   What this still does not cover: files already fetched from Supabase storage
   keep their public URLs, so anyone who noted one down earlier can still open it
   directly. Closing that means making the buckets private and signing the URLs —
   a separate job. The point of this file is that nobody can *discover* those
   paths any more. */

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

export default function middleware(request: Request) {
    const url = new URL(request.url);
    const cookies = request.headers.get("cookie") ?? "";

    /* Already let in on a previous request. */
    if (cookies.split(/;\s*/).includes(`${COOKIE}=${CODE}`)) return;

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

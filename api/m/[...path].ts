/* Media, once the bucket stopped being public.

   Every image and video used to be a plain public Supabase URL, which meant the
   edge gate protected the site but not its contents: anyone who had noted a path
   down could still fetch the screenshots directly, no cookie involved.

   This does not proxy the bytes. Three of the videos are around 20MB and a Vercel
   function may only return 4.5MB, so streaming through here would fail on exactly
   the files worth protecting. Instead it mints a short-lived signed URL and
   redirects; the browser then pulls the file straight off Supabase's CDN, which
   also keeps the bandwidth off Vercel.

   The service key never reaches the browser — that is the whole point of doing
   this here rather than in the client. And because /m/* sits behind the same
   middleware as everything else, a request for a screenshot has to carry the entry
   cookie before it even gets this far. */

export const config = { runtime: "edge" };

const SUPABASE_URL = "https://crvrckpnksobktvqyokp.supabase.co";
const BUCKET = "portfolio";

/* Long enough to load a 20MB video over a slow connection, short enough that a
   signed URL copied out of the network tab is dead by the time it is shared. */
const SIGN_TTL = 60 * 60;

/* Slightly less than the signature's own life, so a cached redirect can never
   hand back a URL that has already expired. */
const REDIRECT_CACHE = SIGN_TTL - 600;

export default async function handler(request: Request) {
    const key = process.env.SUPABASE_SERVICE_KEY;
    if (!key) {
        return new Response("Media signing is not configured", { status: 500 });
    }

    const path = new URL(request.url).pathname.replace(/^\/(api\/)?m\//, "");

    /* Nothing but the bucket's own files. Without this, "../" in a path is an
       invitation to walk out of the bucket. */
    if (!path || path.includes("..")) {
        return new Response("Not found", { status: 404 });
    }

    const signed = await fetch(`${SUPABASE_URL}/storage/v1/object/sign/${BUCKET}/${path}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${key}`,
            "Content-Type": "application/json",
        },
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
            "Cache-Control": `private, max-age=${REDIRECT_CACHE}`,
        },
    });
}

# Security Policy

This is a personal portfolio site, but it's built with a few basic security practices in mind.

## What's in place

- **HTTPS enforced.** The site is served over HTTPS through Vercel, and `Strict-Transport-Security` is set so browsers always connect securely, even if someone types the address without `https://`.
- **Security headers configured** via `vercel.json`, including:
  - `X-Content-Type-Options` — stops the browser from guessing file types in a way that could be exploited.
  - `X-Frame-Options` — prevents the site from being embedded inside another site's iframe (a common trick used in clickjacking attacks).
  - `Content-Security-Policy` — limits which sources scripts, styles, and fonts are allowed to load from.
  - `Referrer-Policy` — limits how much information is shared with other sites when someone clicks a link away from this page.
- **No sensitive personal data in the source code.** Contact details are handled through obfuscated scripts rather than plain, scrapable text.
- **No third-party trackers or analytics scripts** that could leak visitor data.

## Reporting an issue

This is a student project, not a production application, but if you notice a security issue (like a misconfigured header or exposed data), feel free to reach out via the contact section on the site or open an issue on this repository.

## Scope

This policy covers the static site itself (HTML, CSS, JavaScript) and its Vercel deployment configuration. It does not cover third-party services linked from the site (such as social media profiles).

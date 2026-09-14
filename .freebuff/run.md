# SAIT Website — Preview Run Doc

## Reproduce artifacts

Fresh checkout needs the built app and the official logo:

1. Install deps: `npm ci`
2. Build: `npm run build` (Next.js 16 / Turbopack; on Windows a running server locks `.next`, so stop it first)
3. Logo asset is committed at `public/images/SAIT LOGO.png` (RGBA PNG, 1632×1612)

No `.env.local` or other env files exist in the main checkout — nothing to copy.

## Run the server

Production (matches what is currently running):

```powershell
powershell -NoProfile -Command "(Start-Process -FilePath 'npm.cmd' -ArgumentList 'run','start' -RedirectStandardOutput '<log>.out' -RedirectStandardError '<log>.err' -WindowStyle Hidden -PassThru).Id"
```

`next start` picks a random free port when none is set; pin it with `PORT=53378` if you need the same port. Confirm with `Get-Process -Id <pid>` and `curl http://localhost:<port>` before registering.

Dev server alternative: `npm run dev` (hot reload; slower first paint).

Note: `.next` is gitignored, so a fresh checkout must run `npm run build` before `npm run start`.

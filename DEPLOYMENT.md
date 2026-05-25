# Deployment

Stayora runs on Vercel. The `vercel.json` handles routing and static asset serving.

## Vercel dashboard (recommended)

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Project settings:
   - **Build Command**: `npm run build`
   - **Install Command**: `npm install`
   - **Output Directory**: leave empty
4. Click **Deploy**

Every push to `main` redeploys automatically.

## Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

## Environment variables

| Variable | Required | Notes |
|----------|----------|-------|
| `NODE_ENV` | No | Set to `production` on Vercel |
| `PORT` | No | Managed by Vercel automatically |

Add in **Vercel Dashboard → Project → Settings → Environment Variables**.

## GitHub Actions auto-deploy

The `deploy.yml` workflow deploys on every push to `main`. Add these secrets in **GitHub → Repo → Settings → Secrets → Actions**:

| Secret | Where to find it |
|--------|-----------------|
| `VERCEL_TOKEN` | Vercel → Account Settings → Tokens |
| `VERCEL_ORG_ID` | `.vercel/project.json` (run `vercel` locally first) |
| `VERCEL_PROJECT_ID` | `.vercel/project.json` |

## Data persistence note

`data/*.json` files are **read-only on Vercel** — writes (bookings, favourites, new listings) won't persist between deployments. This is expected for a demo. Replace JSON storage with a database for production.

## Troubleshooting

**CSS not loading** — run `npm run build` locally and commit `public/output.css`. Vercel doesn't run the build step with the current config.

**500 errors** — check Vercel Dashboard → Deployments → Functions logs.

**Images not loading** — confirm `public/images/` is committed and the image route exists in `vercel.json`.

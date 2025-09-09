% POTHUS VENDING — React (Vite)

## Scripts
- `npm install`
- `npm run dev` — local dev at http://localhost:5173
- `npm run build` — output in `dist/`
- `npm run preview` — preview the build

## GitHub Pages
- In `vite.config.js`, set `base` to `/<repo-name>/` if deploying to project pages.
- Push to GitHub and enable Pages → Deploy from GitHub Actions.

Add this workflow at `.github/workflows/deploy.yml` in your repo:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

## FormSubmit
The contact form posts to `https://formsubmit.co/pothusllc@gmail.com` with hidden `_replyto` bound to the entered email.
First submit triggers a verification email; approve once and future submissions deliver directly.


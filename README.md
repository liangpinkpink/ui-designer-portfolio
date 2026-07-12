# UI Designer Portfolio

A Vite + React portfolio starter inspired by a dark, orange-accented visual design portfolio style.

## Preview

```bash
npm install
npm run dev
```

You can also open `preview.html` for a no-install local preview.

## Replace Content

- Edit text and project data in `src/data/portfolio.js`.
- Replace images, video covers, and QR placeholders in `public/assets/placeholders`.
- Keep file names the same for the fastest swap, or update the paths in `portfolio.js`.

## Deploy To GitHub Pages

This project includes `.github/workflows/deploy.yml`, so GitHub Actions can build and publish it automatically.

1. Create a new GitHub repository.
2. Upload all files from this folder to the repository root.
3. Open the repository's **Settings > Pages**.
4. Set **Source** to **GitHub Actions**.
5. Push or upload to the `main` branch.
6. Wait for the workflow named **Deploy portfolio to GitHub Pages** to finish.
7. Your published URL will appear in **Settings > Pages**.

The Vite config uses `base: './'`, so the site works under any repository name.

## Sections

1. Hero with animated background and subtle scroll parallax
2. Personal resume profile
3. Selected project showcase
4. Capability summary
5. Contact information

# Certificates Showcase

React + Vite showcase site for Scrimba and Coursera certificates, with
cross-filters by platform and skills.

## Stack

- React + Vite
- Vitest + React Testing Library
- ESLint
- GitHub Actions (CI + GitHub Pages deploy)

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run check
npm run build
```

## Update certificate content

Edit `src/data/certificates.js`.

Each certificate object supports:

- `id`: unique ID
- `title`: certificate name
- `platform`: `scrimba` or `coursera`
- `issueDate`: `YYYY-MM-DD`
- `skills`: array of tags
- `summary`: short description
- `credentialUrl`: external link
- `image`: preview path in `public/assets/certificates`

## GitHub Pages deployment

1. Push to `main`.
2. Ensure GitHub Pages is enabled in repository settings and source is
   **GitHub Actions**.
3. Workflow `.github/workflows/deploy.yml` publishes the built `dist` folder.

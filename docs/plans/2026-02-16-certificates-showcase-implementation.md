# Certificates Showcase Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a React + Vite GitHub Pages showcase for Scrimba and Coursera certificates with cross-filters and data-driven content.

**Architecture:** A single-page React app reads certificates from a JSON source, derives filter facets, and renders responsive certificate cards with platform + skill filtering. Core filtering and sorting logic lives in pure utility functions with unit tests. CI runs lint, tests, and build; deploy workflow publishes static assets to GitHub Pages.

**Tech Stack:** React 18, Vite 5, Vitest, React Testing Library, ESLint, GitHub Actions

---

### Task 1: Scaffold project and tooling

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `src/setupTests.js`
- Create: `eslint.config.js`

**Steps:**
1. Create Vite-compatible scripts (`dev`, `build`, `preview`) and quality scripts (`test`, `lint`, `check`).
2. Add Vitest configuration in `vite.config.js` with jsdom and setup file.
3. Add base HTML shell and React entrypoint.
4. Add ESLint flat config for React + browser globals.

### Task 2: Write failing tests for data logic (TDD)

**Files:**
- Create: `src/lib/certificates.test.js`
- Test target: `src/lib/certificates.js`

**Steps:**
1. Write tests for skill facet generation, query filtering, platform filtering, skill filtering, and date sorting.
2. Run tests and confirm failures due to missing implementation.
3. Implement minimal utility functions.
4. Re-run tests and keep green.

### Task 3: Build data layer and UI components

**Files:**
- Create: `src/data/certificates.js`
- Create: `src/components/FilterBar.jsx`
- Create: `src/components/CertificateCard.jsx`
- Create: `src/components/CertificateGrid.jsx`
- Create: `src/components/StatsBar.jsx`
- Create: `src/App.jsx`
- Create: `src/styles.css`

**Steps:**
1. Add normalized certificate dataset with Scrimba/Coursera entries.
2. Compose app layout with hero, stats, filter bar, and responsive grid.
3. Wire filter state to utility functions for derived result list.
4. Add empty-state and image fallback behavior.

### Task 4: Add UI behavior tests

**Files:**
- Create: `src/App.test.jsx`

**Steps:**
1. Add tests that verify filtering updates results and reset restores all data.
2. Run tests and verify red-green cycle.
3. Keep component behavior minimal and deterministic.

### Task 5: Configure CI and GitHub Pages deploy

**Files:**
- Create: `.github/workflows/ci.yml`
- Create: `.github/workflows/deploy.yml`

**Steps:**
1. Add CI workflow for install, lint, tests, and build on push/PR.
2. Add deploy workflow to publish `dist` with Pages actions on `main`.
3. Set permissions and Pages environment for deployment status.

### Task 6: Final verification and docs

**Files:**
- Modify: `README.md`

**Steps:**
1. Document local commands and how to add certificates.
2. Run `npm run check` and `npm run build`.
3. Capture any blockers if dependency install is not available in sandbox.

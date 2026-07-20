# Contributing

## Branching

- `main` is the default branch and is what Vercel deploys to production.
- Branch per change: `feature/<short-description>`, `fix/<short-description>`.
- Open a PR into `main`; merge once it builds and lints cleanly.

## Before opening a PR

```bash
npm run lint
npm run format:check
npm run build
```

## Commit style

Short, imperative subject lines (e.g. `Add blog post detail page`, not
`Added` or `Adding`). Keep commits scoped to one logical change — scaffold,
a page, a feature — rather than bundling unrelated edits.

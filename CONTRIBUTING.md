# Contributing

Thanks for taking the time to contribute.

## Workflow

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature` or `bugfix/your-fix`
3. Make your changes and test locally
4. Commit using [Conventional Commits](https://www.conventionalcommits.org/):
   ```
   feat: add date range validation to booking form
   fix: resolve empty search results on mobile
   docs: update deployment instructions
   chore: bump dependencies
   ```
5. Push and open a pull request against `main`

## Code style

- 2-space indentation
- Single quotes in JS
- ESLint + Prettier are configured — run `npm run lint` and `npm run format:check` before pushing

## Before submitting a PR

- [ ] All routes work locally
- [ ] No console errors
- [ ] Responsive on mobile
- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds

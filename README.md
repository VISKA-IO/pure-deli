# Pure Deli

A React Router 7 (framework mode) application with TypeScript, Tailwind CSS v4, and Vite.

## Stack

- [React Router 7](https://reactrouter.com/) — framework mode with SSR enabled
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- [Vite](https://vitejs.dev/)
- Cloudflare Workers ready (`@react-router/cloudflare`)

## Scripts

```bash
npm run dev         # start the dev server
npm run build       # production build
npm run start       # serve the production build
npm run typecheck   # generate route types and run tsc
npm run lint        # run ESLint
```

## Project layout

- `app/` — routes, components, and styles
- `public/` — static assets
- `react-router.config.ts` — React Router framework config
- `vite.config.ts` — Vite config

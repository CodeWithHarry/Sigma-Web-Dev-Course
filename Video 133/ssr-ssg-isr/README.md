This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## SSR - Server Side Rendering
This is default behaviour

## SSG - Static Site Generation
Any content which does not have network calls is a static page by default

## ISG or ISR
fetch in next.js caches the response
To opt out use:
```
export const dynamic = 'force-dynamic';
```
However, there are exceptions, fetch requests are not cached when:

- Used inside a Server Action.
- Used inside a Route Handler that uses the POST method.

 
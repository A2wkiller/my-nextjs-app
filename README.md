# MyNextApp

A practice Next.js project covering file-based routing, dynamic routes, shared layouts, and Tailwind CSS.

## Pages

- `/` - Home with welcome message and navigation
- `/about` - Short bio
- `/contact` - Demo contact form (Name, Email, Message)
- `/blog` - List of 3 dummy blog posts
- `/blog/[id]` - Dynamic blog details page, statically generated with `getStaticPaths` + `getStaticProps`

## Stack

- Next.js (Pages Router) + React
- Tailwind CSS
- Shared `Layout` component (header with active-link highlighting + footer)

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

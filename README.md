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

## Notes

Initialise Prisma;

```bash
npx prisma init
```

- After initialising our prisma, we will have .env file and prisma folder in our root.

- `schema.prisma` is our place to write our schemas

- Before migrating our schema to db, we have to update our DATABASE_URL in .env file.
  We use [render](https://render.com/) to have a PostgreSQL instance that we can get external Database URL for our DATABASE_URL variable

- Also make sure we add .env file in `.gitignore`

- Migrate our schema to db;

```bash
npx prisma migrate dev --name init
```

- Open Prisma Studio to see our record in browser;

```bash
npx prisma studio
```

(Not recommended)

- Also added endpoint for external users to use in app/api/todo/route.ts
  Api folder is special type and used for api calls only. route file is similar to page
  Creating GET POST function with export would be enough to expose our api.
  To test this we need visit -> http://localhost:3000/api/todo

- For authentication, we recommend to use [next-auth](https://next-auth.js.org/) with next.js

- Deploy on Vercel

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, start your docker container with 

```bash
docker compose up
```

Then start the spring boot project, there should be a play button within LegoApplication.kt

In a new terminal cd into the frontend

```bash
cd src/main/resources/frontend
```

Then start the frontend project

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


# RusticWheels

This website is designed to log my bikepacking adventure.

## Tech Stack

Development: Nuxt + Vue + RekaUI + TailwindCss
Website Hosting: Google Cloud Platform (Cloud Storage + Cloud Run)
DomainHosting: 

## Setting Up Google Cloud Platform For Web Hosting

### Setting Cloud Storage

- Create a bucket with unique name, multi-region availability, standard storage, allow public access, default soft-delete policy
- Grant Permission to bucket data to allow public acess https://cloud.google.com/storage/docs/access-control/making-data-public#buckets

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

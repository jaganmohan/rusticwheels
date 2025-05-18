# RusticWheels

This website is designed to log my bikepacking adventure.

## Tech Stack

- Development: Nuxt + Vue + RekaUI + TailwindCss
- Website Hosting: Google Cloud Platform (Cloud Storage + Cloud Run)
- DomainHosting: Temporarily using native GCP DNS

## Setting Up Google Cloud Platform For Web Hosting

This assumes you already followed gcloud setup and initialization. Refer https://cloud.google.com/sdk/docs/install-sdk.

### Setting Cloud Storage

- Create a bucket with unique name, multi-region availability, standard storage, allow public access, default soft-delete policy
- Grant Permission to bucket data to allow public acess https://cloud.google.com/storage/docs/access-control/making-data-public#buckets

### Deploying Service On Cloud Run

- gcloud run deploy --source --allow-unauthenticated (this will also ask the preferred region and opting for artifact registry) from local terminal.
- you can also deploy directly from repository https://cloud.google.com/run/docs/quickstarts/deploy-continuously#deploy-from-repo
- Watch https://www.youtube.com/watch?v=eemS-UTjdb0 for supported javascript frameworks.

### Linking Service To A Domain

There are two ways to use a custom domain for a Cloud Run hosted service which I liked:
- using Firebase
- using Cloud Global Load Balancer

## Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### Setup

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

### Development Server

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

### Production

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

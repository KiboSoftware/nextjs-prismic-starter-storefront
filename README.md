<h2 align="center">KiboCommerce & Next.JS & Prismic</h2>

<p align="center">
This is a headless ecommerce starter kit for KiboCommerce platform using Next.JS and Prismic<br>
</p>

### Features

- Performant by default
- SEO Ready
- Internationalization
- Responsive
- UI Components built on top of Material UI 5
- Theming
- KiboCommerce data hooks
- PWA Ready
- Omni Channel Capability (Ship to home and Pickup in Store support)
- Prismic Integration

## Getting Started

1. Clone this repo

```bash
git clone https://github.com/KiboSoftware/nextjs-prismic-starter-storefront.git
```

2. Change into directory and install dependencies

```bash
npm install
```

3. Copy .env template

```bash
cp .env.template .env.local
```

4. Configure env variables for your Kibo Commerce environment
5. Start Dev server

```bash
npm run dev
npm run slicemachine
```

## Configuration

.env example

```bash
KIBO_API_HOST=t1234-s1234.sandbox.mozu.com
KIBO_AUTH_HOST=home.mozu.com
KIBO_CLIENT_ID=KIBO_APP.1.0.0.Release
KIBO_SHARED_SECRET=12345_Secret
```

The following data is required to configure the storefront to communicate with your Kibo API Client.

- `apiHost` - Your Kibo Commerce API Host.
- `authHost` - Kibo Commerce Authentication Host Server. It is used to request an access token from Kibo Commerce OAuth 2.0 service. Production and Production sandbox, use `home.mozu.com`
- `clientId` - Unique Application (Client) ID of your Application
- `sharedSecret` - Secret API key used to authenticate application. Viewable from your [Kibo eCommerce Dev Center](https://mozu.com/login)

Visit [Kibo documentation](https://apidocs.kibong-perf.com/?spec=graphql#auth) for more details on API authentication

## Useful Commands

```bash
npm run dev # Start dev server
npm run build # Run production build
npm run start # Run production start
npm run generate-types # generate typescript Kibo API types from GraphQL Schema
npm run storybook # start storybook for
npm run test # run unit / integration tests
```

## Built with

- Framework - [Next.JS](https://nextjs.org/docs)
- Component Library - [Material UI 5](https://mui.com/material-ui/getting-started/overview/)
- Testing - [Jest](https://jestjs.io/docs/getting-started)
- Data Fetching / State Management - [React Query](https://react-query-v3.tanstack.com/overview)
- Localization - [Next i18Next](https://github.com/i18next/next-i18next)

## Configure Prismic

1. Create account/login at Prismic - [Prismic.io](https://prismic.io/dashboard/signup)
2. Create new repository with Next.js in Prismic dashboard
3. Open sm.json and change repository 'kibo-commerce' with your repository name at
   "apiEndpoint": "https://kibo-commerce.prismic.io/api/v2",
4. Run the slicemachine
   ```bash
   npm run slicemachine
   ```
5. Open
   ```bash
   http://localhost:9999/
   ```
6. Click on 'Changes' tab in slicemachine
7. Click on 'Push Changes' button in slicemachine to push it into your Prismic repository
8. Go to your Prismic repository
9. Under 'work' tab, click on 'Create new' button
10. Select 'Homepage' (pushed through slicemachine)
11. Create Homepage slices
12. Save the contents and publish it
13. Run the application (npm run dev), and verify the changes

## Contributions

All contributions welcome! 3.

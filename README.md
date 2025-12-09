# Next.js WordPress Starter

Scaling WordPress with the power of [Next.js](https://nextjs.org/) and the static web!

- [⚡️ Quick Start](#%EF%B8%8F-quick-start)
- [🚀 Getting Started](#-getting-started)
- [🛠 Configuring Your Project](#-configuring-your-project)
- [🔌 Plugins](#-plugins)
- [💝 Sponsors](#-sponsors)
- [✨ Contributors](#-contributors)

### Requirements
* [WordPress](https://wordpress.org/)
* [WPGraphQL](https://www.wpgraphql.com/)
* Environment variables (see below)

```bash
yarn create next-app -e https://github.com/Jacob-A11/NEXT-WORDPRESS
# or
npx create-next-app -e https://github.com/Jacob-A11/NEXT-WORDPRESS
```

Add an `.env.local` file to the root with the following:
```
WORDPRESS_GRAPHQL_ENDPOINT="http://wordpressite.com/graphql"
```

## 🚀 Getting Started

### What is this and what does it include?

The goal of this project is to take WordPress as a headless CMS and use Next.js to create a static experience without any 3rd party services that can be deployed anywhere.

The hope is to build out as many features as we can to support what's typically expected from an out of the box theme on WordPress. Currently, those features include:
* Blog
* Pages
* Posts
* Categories
* Authors
* Search
* RSS
* Sitemap

Additionally, the theme is expected to be SEO friendly and performant out of the box, including:
* Unique page titles
* Unique descriptions
* Open Graph tags

You can also optionally enable Yoast SEO plugin support to supercharge your SEO! (See below)

Check out the [Issues](https://github.com/Jacob-A11/NEXT-WORDPRESS/issues) for what's on deck!

### Requirements
* [WordPress](https://wordpress.org/)
* [WPGraphQL](https://www.wpgraphql.com/)
* Environment variables (see below)

### Environment

This project makes use of WPGraphQL to query WordPress with GraphQL. In order to make that request to the appropriate endpoint, we need to set a environment variable to let Next.js know where to request the site information from.

Create a new file locally called `.env.local` and add the following:

```bash
WORDPRESS_GRAPHQL_ENDPOINT="[WPGraphQL Endpoint]"
```

Replace the contents of the variable with your WPGraphQL endpoint. By default, it should resemble `[Your Host]/graphql`.

*Note: environment variables can optionally be statically configured in next.config.js*

#### All Environment Variables

| Name                               | Required | Default | Description                                       |
| ---------------------------------- | -------- | -       | ------------------------------------------------- |
| WORDPRESS_GRAPHQL_ENDPOINT         | Yes      | -       | WordPress WPGraphQL endpoint (ex: host.com/graphl)|
| WORDPRESS_MENU_LOCATION_NAVIGATION | No       | PRIMARY | Configures header navigation Menu Location        |
| WORDPRESS_PLUGIN_SEO               | No       | false   | Enables SEO plugin support (true, false)          |

Please note some themes do not have PRIMARY menu location.

### Development

To start the project locally, run:

```bash
yarn dev
# or
npm run dev
```

The project should now be available at [http://localhost:3000](http://localhost:3000)!

### Deployment

**Essential Next.js Plugin** should be provided as an option when you're first importing a project based on this starter. If it's not, you can install this plugin using the Netlify Plugins directory. This will allow the project to take full advantage of all native Next.js features that Netlify supports with this plugin.

**Exporting the project** lets Next.js compile the project into static assets including HTML files. This allows you to deploy the project as a static site directly to Netlify just like any other site. You can do this by adding `next export` to the end of the `build` command inside `package.json` (ex: `next build && next export`).

Regardless of which option you choose, you can configure your [environment variables](#environment) either when creating your new site or by navigating to Site Settings > Build & Deploy > Environment and triggering a new deploy once added.

#### Vercel

Given Next.js is a Vercel-supported project, you can simply import the project as a new site and configure your [environment variables](#environment) by either adding them during import or by navigating to Settings > Environment Variables and triggering a new build once added.

## 🛠 Configuring Your Project

### package.json

In order to avoid an additional configuration file, we take advantage of some built-in properties of `package.json` to configure parts of the website.

| Name                       | Required | Description                                                        |
| -------------------------- | -------- | ------------------------------------------------------------------ |
| homepage                   | Yes      | Homepage or hostname used to construct full URLs (ex Open Graph)   |

- homepage: Setting the `homepage` property will update instances where the full URL is required such as Open Graph tags

### WordPress

This project aims to take advantage of as many built-in WordPress features by default like a typical WordPress theme. Those include:

| Name                       | Usage                                   |
| -------------------------- | --------------------------------------- |
| Site Language              | `lang` attribute on the `<html>` tag    |
| Site Title                 | Homepage header, page metadata          |
| Tagline                    | Homepage subtitle                       |

There is some specific WordPress configuration required to allow for the best use of this starter.


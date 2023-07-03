# Astro Portfolio Starter

> A simple portfolio theme for Astro powered by Tailwind CSS.

## 🔥 Features
- [x] Beautiful and simple design.
- [x] Easy configuration
- [x] Markdown & MDX support
- [x] Search functionality
- [x] Tags support.
- [x] Dark / Light toggle.
- [x] 100/100 Lighthouse performance
- [x] SEO-friendly with canonical URLs and OpenGraph data
- [x] Uses [`astro:assets`](https://docs.astro.build/en/guides/assets/) for optimized images
- [x] Sitemap and RSS feed support
- [x] Blog drafts
- [x] Blog pagination

## 🌍 Demo URL

https://astro-portfolio-starter.netlify.app/


## 👨🏾‍💻 Getting started

```
npm create astro@latest -- --template peoray/astro-portfolio-starter
```

### 👨🏾‍💻 Configuration

Edit the values in `src/consts.ts` to match your brand or company:

```ts

// site artefacts
export const SITE_TITLE = 'Astro Portfolio Starter'
export const SITE_URL = 'https://astro-portfolio-starter.netlify.app/'
export const SITE_DESCRIPTION = 'Welcome to my personal website!'
export const PAGE_DESCRIPTION =
  'A simple portfolio theme for Astro powered by Tailwind CSS'
export const AUTHOR = 'Emmanuel Raymond'
export const IMAGE = '/images/photo.png'
export const IMAGE_ALT = 'Photo of an avatar'

// social links
export const EMAIL = 'mailto:peoray@yahoo.com'
export const TWITTER = 'https://twitter.com/peoray_'
export const GITHUB = 'https://github.com/peoray/astro-portfolio-starter'
export const YOUTUBE = 'https://youtube.com'
export const INSTAGRAM = 'https://instagram.com'


```

Change any lines or add more in the `<head>` tags in `src/components/MetaTags.astro`, like the favicon:

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

## 🚀 Project Structure

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check the [Astro documentation](https://docs.astro.build) or jump into the [Discord server](https://astro.build/chat).

## 💙 Acknowledgement

This theme is a port of [Gridsome Portfolio Starter](https://github.com/drehimself/gridsome-portfolio-starter) made by Andre Madarang.

## ✨ Contributing

Feel free to open an issue if you find bugs or want to request new features.

## 📜 License

Licensed under the [MIT License](https://opensource.org/license/mit/), Copyright © Emmanuel Raymond 2023

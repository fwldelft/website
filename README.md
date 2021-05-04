# Installation

0. Prerequisites: `node.js`, `yarn`

1. Install dependencies with

```sh
$ yarn install
```

2. Start the development server with

```sh
$ yarn next dev
```

> Any changes should now reflect automatically in your browser

3. Deploy by pushing commits to the `master` branch on GitHub. You can test the
   production build on your own computer by doing

```sh
$ yarn next build
$ yarn next start
```

> If everything works there, it will be fine on the server!

# Architecture

This is using `typescript`, `react` and the `next.js` framework, check their
documentation to find out how to use them. As a note, if you use Visual Studio
Code, it will complain about mistakes or things that don't make sense, as well
as auto-format on save and do the correct syntax-highlighting for TypeScript and
CSS-in-JS.

The pages are in `src/pages/...`, each imports all the components it uses, so
you never get lost if you "follow the thread".

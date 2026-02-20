# Biteral API documentation

## Multilanguage
Every change made inside `/docs` in english should also be made in spanish to the same file under `/i18n/es/docusaurus-plugin-content-docs/current`.

## Docusaurus usage
Inside the `biteral-api-doc` directory:

```bash
 npx docusaurus start
```

```bash
npm run start -- --locale es
```

### Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

# Changelog

All notable changes to this project will be documented in this file.

## [1.1.30] - 2023-11-06

### Bug Fixes

- Adjust import path in `_app.tsx`

### Refactor

- Update project structure and config files

### Documentation

- Remove manual title prefix in issue templates

### Miscellaneous Tasks

- Update GitHub Actions workflow for enhanced CI/CD pipeline
- Add a GitHub Actions CI/CD pipeline for automated template cleanup
- Standardize quotation marks in config files
- Enable strict versioning in npm, remove auto-install peers
- Add two new Prettier plugins to `package.json`
- Add `out` directory to `.prettierignore`
- Add TailwindCSS linting rules to `.eslintrc.json`
- Update eslint rule in `.eslintrc.json`
- Update prettier plugins and configuration
- Add `.swc` files to `.gitignore`
- Add `lint-staged.config.js` for pre-commit checks
- Add `cssnano` plugin only in production
- Adjust `prettier.config.js` to include tailwind functions
- Add Next.js Jest configuration
- Add `unoptimized` images option in `next.config.js`
- Update `prestart` script to pnpm in `package.json`
- Remove `preexport` script from `package.json`
- Add `prepare` script in `package.json`
- Add `types` script in `package.json`
- Add `test` script in `package.json`
- Update `webpack` configuration in `next.config.js`
- Update `.gitignore` to ignore `lingui` generated files
- Update `pnpm-lock.yaml` with `lingui` packages for i18n support
- Add Lingui configuration file for localizations
- Add necessary scripts to husky pre-commit hooks

## [1.1.29] - 2023-11-06

### Bug Fixes

- Solve some minor issues and update dependencies

## [1.1.28] - 2023-11-06

### Miscellaneous Tasks

- Remove `export` scripts from package.json
- Add `export` option to `next.config.js`

## [1.1.27] - 2023-10-31

### Miscellaneous Tasks

- Migrate from google fonts to local fonts (#374)

## [1.1.26] - 2023-10-30

### Bug Fixes

- Solve some minor issues and update dependencies

## [1.1.24] - 2023-07-08

### Documentation

- Update development server command in README.md

### Miscellaneous Tasks

- Update package.json with turbo dependency
- Add turbo.json configuration file
- Ignore `.turbo` in the gitignore file
- Add trigger for feature branches on `build` workflow
- Update build workflow to use `turbo`

## [1.1.21] - 2023-06-28

### Documentation

- Set sponsorships configuration for github

## [1.1.20] - 2023-06-28

### Documentation

- Add funding to the packge configs
- Add crypto donate badge to the project readme

### Miscellaneous Tasks

- Change `package-ecosystem` back to `npm` on Dependabot configs

## [1.1.19] - 2023-06-24

### Miscellaneous Tasks

- Switch `package-ecosystem` from `npm` to `pnpm` for Dependabot

## [1.1.16] - 2023-05-21

### Miscellaneous Tasks

- Solve some issues over `build` workflow

## [1.1.15] - 2023-05-21

### Miscellaneous Tasks

- Drop support for node version 17 and earlier
- Drop support for node version 17 and earlier

## [1.1.13] - 2023-05-10

### Miscellaneous Tasks

- Install and config `prettier` for code formatting
- Change `open-pull-requests-limit` from 10 to 20
- Add node version 20 on `build` workflow
- Reorganize scripts on package file

### Styling

- Reformat codes using `prettier`

## [1.1.12] - 2023-04-25

### Documentation

- Migrate to new github issue templates

### Miscellaneous Tasks

- Bump `pnpm` version from 7 to 8 on `pnpm` workflow

## [1.1.8] - 2023-03-30

### Bug Fixes

- Solve some minor issues and update dependencies

### Revert

- Change package version back to default

## [1.1.4] - 2023-02-15

### Performance

- Optimize fonts and remove external network requests

## [1.1.3] - 2023-02-08

### Miscellaneous Tasks

- Solve some issue related to run `release` workflow
- Disable mangling class names logs on production
- Improve `classNameRegExp` for `tailwind` class names

## [1.1.2] - 2023-02-01

### Features

- Configure `@` as import alias

### Refactor

- Replace import alias on relative import paths

### Documentation

- Add basic guidelines to contributing to the repository
- Update twitter badge due to depreciation

## [1.1.1] - 2023-01-22

### Bug Fixes

- Improve regex rules for `mangle-css-class-webpack-plugin`

### Documentation

- Add issue templates for bug report and feature requests

## [1.1.0] - 2023-01-18

### Features

- Add `tailwind` class names obfuscation by `webpack`

### Bug Fixes

- Solve react hydration error by adding `useIsMounted`

### Refactor

- Add missing `tw-` prefix for css classes

## [1.0.4] - 2023-01-15

### Miscellaneous Tasks

- Change `save-prefix` from carrot to exact version
- Change `open-pull-requests-limit` from 10 to 20

## [1.0.3] - 2023-01-02

### Miscellaneous Tasks

- Remove pull request links from changelogs

## [1.0.2] - 2023-01-02

### Documentation

- Move header title above badges on readme

### Miscellaneous Tasks

- Add a new `release` workflow to create releases

## [1.0.1] - 2023-01-01

### Documentation

- Change project license to `APLv2` (#80)
- Add some status badges to the readme file

### Miscellaneous Tasks

- Skip running `pnpm` workflow on ci dependencies
- Specifiy node version of cloudflare pages
- Setup stale bot to closes abandoned issues

## [1.0.0-alpha.12] - 2022-11-11

### Bug Fixes

- Solve react hydration error by adding `useIsMounted`

### Documentation

- Update and improve the project readme file

### Miscellaneous Tasks

- Add the `pnpm` workflow to update lock file
- Add the hooks folder including the index

### Styling

- Disable `no-img-element` rule on `eslint`

## [1.0.0-alpha.9] - 2022-10-24

### Miscellaneous Tasks

- Add node version `18` to the `build` workflow
- Add node version `19` to the `build` workflow
- Change package version to 1.0.0-alpha.0

## [1.0.0-alpha.8] - 2022-10-24

### Miscellaneous Tasks

- Add missing environmental variables for `build` workflow

## [1.0.0-alpha.7] - 2022-10-24

### Miscellaneous Tasks

- Patching `set-output` on `build` workflow

## [1.0.0-alpha.4] - 2022-09-22

### Refactor

- Add a middleware to the page functions to proxy main api requests

## [1.0.0-alpha.2] - 2022-09-14

### Miscellaneous Tasks

- Enable automatic install of peer dependencies

## [1.0.0-alpha.1] - 2022-09-12

### Miscellaneous Tasks

- Replace `yarn` by `pnpm` over `build` workflow
- Add concurrency settings to `build` workflow
- Add `wrangler` for develop and serve functions
- Change package name over package file

## [1.0.0-alpha.0] - 2022-09-12

### Refactor

- Cleanup home page and styles
- Add `londrina-solid` font from google as default
- Add default seo config and information
- Add basic sitemap configuration
- Solve missing url on next seo open graph

### Documentation

- Cleanup the project main readme file

### Miscellaneous Tasks

- Create new next project using creator
- Add an editor config configuration file
- Add a configuration file for `dependabot`
- Add new `build` github worklfow to run on pushs
- Add `export` to the package scripts
- Remove api folder due to static generation
- Add `git-clif` configuration file
- Replace default favicon by a nouns favicon
- Install and initialize tailwind css
- Enable pre and post scripts running by `pnpm`

<!-- generated by git-cliff -->

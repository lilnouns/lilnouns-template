# Changelog

All notable changes to this project will be documented in this file.

## [1.0.4] - 2023-01-15

### <!-- 07 -->Continuous Integrations

- Bump orhun/git-cliff-action from 2.0.1 to 2.0.3 
- Bump actions/setup-node from 3.5.1 to 3.6.0 
- Bump actions/cache from 3.2.2 to 3.2.3 
- Bump actions/checkout from 3.2.0 to 3.3.0 
- Change `open-pull-requests-limit` from 10 to 20

### <!-- 08 -->Miscellaneous Tasks

- Change `save-prefix` from carrot to exact version
- Replace exact versions instead of carrot
- Bump eslint-config-next from 13.1.1 to 13.1.2 
- Bump next from 13.1.1 to 13.1.2 

## [1.0.3] - 2023-01-02

### <!-- 08 -->Miscellaneous Tasks

- Remove pull request links from changelogs

## [1.0.2] - 2023-01-02

### <!-- 05 -->Documentation

- Move header title above badges on readme

### <!-- 07 -->Continuous Integrations

- Add a new `release` workflow to create releases

### <!-- 08 -->Miscellaneous Tasks

- Bump eslint from 8.30.0 to 8.31.0 

## [1.0.1] - 2023-01-01

### <!-- 05 -->Documentation

- Change project license to `APLv2` 
- Add some status badges to the readme file

### <!-- 07 -->Continuous Integrations

- Skip running `pnpm` workflow on ci dependencies
- Bump actions/cache from 3.0.11 to 3.2.0 
- Setup stale bot to closes abandoned issues
- Bump actions/cache from 3.2.0 to 3.2.2 

### <!-- 08 -->Miscellaneous Tasks

- Specifiy node version of cloudflare pages
- Add `clsx` to dependencies
- Bump eslint-config-next from 13.0.7 to 13.1.1 
- Bump @types/react-dom from 18.0.9 to 18.0.10 
- Bump @types/node from 18.11.17 to 18.11.18 
- Bump next from 13.0.7 to 13.1.1 
- Add `@cloudflare/workers-types` to dependencies

## [1.0.0] - 2022-12-19

### <!-- 08 -->Miscellaneous Tasks

- Bump eslint-config-next from 13.0.6 to 13.0.7 
- Bump next from 13.0.6 to 13.0.7 
- Bump @types/node from 18.11.15 to 18.11.17 
- Bump eslint from 8.29.0 to 8.30.0 

## [1.0.0-alpha.15] - 2022-12-14

### <!-- 07 -->Continuous Integrations

- Bump actions/checkout from 3.1.0 to 3.2.0 

### <!-- 08 -->Miscellaneous Tasks

- Bump typescript from 4.9.3 to 4.9.4 
- Bump @types/node from 18.11.11 to 18.11.13 
- Bump @types/node from 18.11.13 to 18.11.15 

## [1.0.0-alpha.14] - 2022-12-06

### <!-- 08 -->Miscellaneous Tasks

- Bump eslint-config-next from 13.0.4 to 13.0.5 
- Bump @types/react from 18.0.25 to 18.0.26 
- Bump next from 13.0.4 to 13.0.6 
- Bump eslint-config-next from 13.0.5 to 13.0.6 
- Bump @types/node from 18.11.9 to 18.11.11 
- Bump eslint from 8.28.0 to 8.29.0 

## [1.0.0-alpha.13] - 2022-11-21

### <!-- 08 -->Miscellaneous Tasks

- Bump eslint-config-next from 13.0.1 to 13.0.3 
- Bump next from 13.0.2 to 13.0.3 
- Bump @types/react-dom from 18.0.8 to 18.0.9 
- Bump typescript from 4.8.4 to 4.9.3 
- Bump next from 13.0.3 to 13.0.4 
- Bump eslint-config-next from 13.0.3 to 13.0.4 
- Bump eslint from 8.27.0 to 8.28.0 

## [1.0.0-alpha.12] - 2022-11-11

### <!-- 02 -->Bug Fixes

- Solve react hydration error by adding `useIsMounted`

### <!-- 05 -->Documentation

- Update and improve the project readme file

### <!-- 07 -->Continuous Integrations

- Add the `pnpm` workflow to update lock file

### <!-- 08 -->Miscellaneous Tasks

- Bump @types/node from 18.11.8 to 18.11.9 
- Add `tilg:0.1.1` to dependencies
- Add the hooks folder including the index
- Bump next from 13.0.1 to 13.0.2 
- Bump @types/react from 18.0.24 to 18.0.25 
- Bump eslint from 8.26.0 to 8.27.0 

## [1.0.0-alpha.11] - 2022-11-01

### <!-- 08 -->Miscellaneous Tasks

- Bump @types/node from 18.11.5 to 18.11.7
- Bump @types/react-dom from 18.0.7 to 18.0.8
- Bump @types/react from 18.0.23 to 18.0.24
- Bump @types/node from 18.11.7 to 18.11.8
- Bump next from 13.0.0 to 13.0.1
- Bump eslint-config-next from 13.0.0 to 13.0.1

## [1.0.0-alpha.10] - 2022-10-26

### <!-- 08 -->Miscellaneous Tasks

- Bump @types/node from 18.11.4 to 18.11.5
- Bump eslint-config-next from 12.3.1 to 13.0.0
- Bump next from 12.3.1 to 13.0.0
- Bump @types/react-dom from 18.0.6 to 18.0.7
- Bump @types/react from 18.0.21 to 18.0.23

## [1.0.0-alpha.9] - 2022-10-24

### <!-- 07 -->Continuous Integrations

- Add node version `18` to the `build` workflow
- Add node version `19` to the `build` workflow

### <!-- 08 -->Miscellaneous Tasks

- Change package version to 1.0.0-alpha.0

## [1.0.0-alpha.8] - 2022-10-24

### <!-- 07 -->Continuous Integrations

- Add missing environmental variables for `build` workflow

## [1.0.0-alpha.7] - 2022-10-24

### <!-- 07 -->Continuous Integrations

- Patching `set-output` on `build` workflow

### <!-- 08 -->Miscellaneous Tasks

- Bump eslint from 8.25.0 to 8.26.0
- Bump @types/node from 18.11.2 to 18.11.4
- Update `pnpm` lockfile state

## [1.0.0-alpha.6] - 2022-10-20

### <!-- 07 -->Continuous Integrations

- Bump actions/setup-node from 3.4.1 to 3.5.0
- Bump actions/cache from 3.0.8 to 3.0.10
- Bump actions/checkout from 3.0.2 to 3.1.0
- Bump pnpm/action-setup from 2.2.2 to 2.2.3
- Bump actions/cache from 3.0.10 to 3.0.11
- Bump actions/setup-node from 3.5.0 to 3.5.1
- Bump pnpm/action-setup from 2.2.3 to 2.2.4

### <!-- 08 -->Miscellaneous Tasks

- Bump @types/node from 18.7.18 to 18.7.22
- Bump typescript from 4.8.3 to 4.8.4
- Bump eslint from 8.24.0 to 8.25.0
- Bump @types/node from 18.7.22 to 18.8.4
- Bump @types/node from 18.8.4 to 18.11.2

## [1.0.0-alpha.5] - 2022-09-26

### <!-- 08 -->Miscellaneous Tasks

- Bump eslint from 8.23.1 to 8.24.0
- Bump @types/node from 18.7.18 to 18.7.21
- Bump @types/react from 18.0.20 to 18.0.21

## [1.0.0-alpha.4] - 2022-09-22

### <!-- 04 -->Refactor

- Add a middleware to the page functions to proxy main api requests

## [1.0.0-alpha.3] - 2022-09-21

### <!-- 08 -->Miscellaneous Tasks

- Bump next from 12.3.0 to 12.3.1
- Bump eslint-config-next from 12.3.0 to 12.3.1

## [1.0.0-alpha.2] - 2022-09-14

### <!-- 07 -->Continuous Integrations

- Bump pnpm/action-setup from 2.0.1 to 2.2.2

### <!-- 08 -->Miscellaneous Tasks

- Move `wrangler` to development dependencies
- Enable automatic install of peer dependencies
- Bump @types/react from 18.0.19 to 18.0.20
- Bump @types/node from 18.7.16 to 18.7.18

## [1.0.0-alpha.1] - 2022-09-12

### <!-- 07 -->Continuous Integrations

- Replace `yarn` by `pnpm` over `build` workflow
- Add concurrency settings to `build` workflow

### <!-- 08 -->Miscellaneous Tasks

- Add `wrangler` for develop and serve functions
- Change package name over package file

## [1.0.0-alpha.0] - 2022-09-12

### <!-- 04 -->Refactor

- Cleanup home page and styles
- Add `londrina-solid` font from google as default
- Add default seo config and information
- Add basic sitemap configuration
- Solve missing url on next seo open graph

### <!-- 05 -->Documentation

- Cleanup the project main readme file

### <!-- 07 -->Continuous Integrations

- Add a configuration file for `dependabot`
- Add new `build` github worklfow to run on pushs

### <!-- 08 -->Miscellaneous Tasks

- Create new next project using creator
- Add an editor config configuration file
- Add `export` to the package scripts
- Remove api folder due to static generation
- Add `git-clif` configuration file
- Replace default favicon by a nouns favicon
- Install and initialize tailwind css
- Enable pre and post scripts running by `pnpm`

<!-- generated by git-cliff -->

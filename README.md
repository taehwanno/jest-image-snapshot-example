# jest-image-snapshot-example [![Build Status](https://circleci.com/gh/taehwanno/jest-image-snapshot-example.svg?style=shield&circle-token=29400e7bd43d764abe44e65bd1dd61d773b4e32d)](https://circleci.com/gh/taehwanno/jest-image-snapshot-example)

Jest Image Snapshot Example with [jest-image-snapshot](https://github.com/americanexpress/jest-image-snapshot), [puppeteer](https://github.com/GoogleChrome/puppeteer) and [Circle CI](https://circleci.com/) 2.0 for Visual Regression Test

# Prerequisite

- node >= `v7.10.0`
- jest >= `v20.0.0`
- yarn

This project assumes node.js version with `v8.4.0`.

# Installation

```bash
$ npm install
```

# Test

First, run server.

```bash
$ npm start
```

and open another terminal, run test script.

```bash
$ npm test
```

To update snapshot image file, run test with `-u`

```bash
$ npm test -- -u
```

# [GoogleChrome/puppeteer #290 Issue](https://github.com/GoogleChrome/puppeteer/issues/290) with Circle CI

In Circle CI Ubuntu 14.04 (Trusty), you should additionally install [required dependencies](https://github.com/GoogleChrome/puppeteer/issues/290#issuecomment-322838700).

## Workaround Implementation
- [./scripts/workaround-puppeteer-issue-290.sh](./scripts/workaround-puppeteer-issue-290.sh)
- [./.circleci/config.yml](https://github.com/taehwanno/jest-image-snapshot-example/blob/86f15156785171695b616568e91dd115dad08a59/.circleci/config.yml#L22-L24)

## References
- https://github.com/GoogleChrome/puppeteer/pull/311
- https://github.com/Quramy/puppeteer-example

# License

MIT © [Taehwan, No](https://github.com/taehwanno)

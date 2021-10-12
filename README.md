# stylelint-config-standard-scss

[![npm version](http://img.shields.io/npm/v/stylelint-config-standard-scss.svg)](https://www.npmjs.org/package/stylelint-config-standard-scss)
[![Build Status](https://github.com/stylelint-scss/stylelint-config-standard-scss/workflows/Tests/badge.svg)](https://github.com/stylelint-scss/stylelint-config-standard-scss/actions?workflow=Tests)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)
[![Downloads per month](https://img.shields.io/npm/dm/stylelint-config-standard-scss.svg)](https://npmcharts.com/compare/stylelint-config-standard-scss)
[![Greenkeeper badge](https://badges.greenkeeper.io/stylelint-scss/stylelint-config-standard-scss.svg)](https://greenkeeper.io/)

> The standard shareable SCSS config for Stylelint.

Extends [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) and [`stylelint-config-recommended-scss`](https://github.com/stylelint-scss/stylelint-config-recommended-scss).

Turns on additional rules to enforce the common stylistic conventions found within a handful of Sass styleguide such as [Sass Guidelines](https://sass-guidelin.es/) and [Sass Style Guide](https://css-tricks.com/sass-style-guide/).

Use it as is or as a foundation for your own config.

To see the rules that this config uses, please read the [config itself](/index.js).

## Installation

```shell
npm install stylelint stylelint-config-standard-scss --save-dev
```

## Usage

If you've installed `stylelint-config-standard-scss` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "stylelint-config-standard-scss"
}
```

If you've globally installed `stylelint-config-standard-scss` using the `-g` flag, then you'll need to use the absolute path to `stylelint-config-standard-scss` in your config e.g.

```json
{
  "extends": "/absolute/path/to/stylelint-config-standard-scss"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to turn off the `block-no-empty` rule, and add the `unit-whitelist` rule:

```json
{
  "extends": "stylelint-config-standard-scss",
  "rules": {
    "block-no-empty": null,
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)

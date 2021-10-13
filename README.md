# stylelint-config-standard-scss

[![npm version](http://img.shields.io/npm/v/stylelint-config-standard-scss.svg)](https://www.npmjs.org/package/stylelint-config-standard-scss)
[![Build Status](https://github.com/stylelint-scss/stylelint-config-standard-scss/workflows/Tests/badge.svg)](https://github.com/stylelint-scss/stylelint-config-standard-scss/actions?workflow=CI)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)
[![Downloads per month](https://img.shields.io/npm/dm/stylelint-config-standard-scss.svg)](https://npmcharts.com/compare/stylelint-config-standard-scss)

> The standard shareable SCSS config for Stylelint.

Extends [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) and [`stylelint-config-recommended-scss`](https://github.com/stylelint-scss/stylelint-config-recommended-scss).

Turns on additional rules to enforce the common stylistic conventions found within a handful of Sass styleguide such as [Sass Guidelines](https://sass-guidelin.es/) and [Sass Style Guide](https://css-tricks.com/sass-style-guide/).

Use it as is or as a foundation for your own config.

To see the rules that this config uses, please read the [config itself](/index.js).

## Installation

```shell
npm install --save-dev stylelint-config-standard-scss
```

## Usage

Det your `stylelint` config to:

```json
{
  "extends": "stylelint-config-standard-scss"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to turn off the `scss/dollar-variable-pattern` rule:

```json
{
  "extends": "stylelint-config-standard-scss",
  "rules": {
    "scss/dollar-variable-pattern": null
  }
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)

# @haixing_hu/eslint-config

A customized ESLint rules configuration for JavaScript coding style.

## Installation

First install the [ESLint](https://eslint.org/) with the following command:

```sh
yarn add --dev eslint
```
Next, install `@haixing_hu/eslint-config`:

```sh
yarn add --dev @haixing_hu/eslint-config
```

## Usage

Add `@haixing_hu/eslint-config` to the `extends` section of your `.eslintrc` configuration file:

```json
{
    "extends": [
        "@haixing_hu/eslint-config"
    ]
}
```

A full example of `.eslintrc` configuration file is as follows:
```json
{
    "root": true,
    "extends": [
        "@haixing_hu/eslint-config"
    ]
}
```

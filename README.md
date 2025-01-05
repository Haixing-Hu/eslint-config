# @qubit-ltd/eslint-config

A customized ESLint rules configuration for JavaScript coding style.

## Installation

First install the [ESLint](https://eslint.org/) with the following command:

```sh
yarn add --dev eslint
```
Next, install `@qubit-ltd/eslint-config`:

```sh
yarn add --dev @qubit-ltd/eslint-config
```

## Usage

Add `@qubit-ltd/eslint-config` to the `extends` section of your `.eslintrc` configuration file:

```json
{
    "extends": [
        "@qubit-ltd/eslint-config"
    ]
}
```

A full example of `.eslintrc` configuration file is as follows:
```json
{
    "root": true,
    "extends": [
        "@qubit-ltd/eslint-config"
    ]
}
```

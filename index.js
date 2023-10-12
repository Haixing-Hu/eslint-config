/*******************************************************************************
 *
 *    Copyright (c) 2022 - 2023.
 *    Haixing Hu, Qubit Co. Ltd.
 *
 *    All rights reserved.
 *
 ******************************************************************************/

/**
 * ESLint rule configuration that complies with the JavaScript coding standard
 * of our company.
 *
 * @author Haixing Hu
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    amd: true,
    mocha: true,
    jest: true,
    jasmine: true,
    phantomjs: true,
    protractor: true,
  },
  extends: [
    'airbnb-base',            // Based on the Airbnb’s base coding standard
  ],
  rules: {                    // Coupled with the internal rules of our company
    // Do not force use of `CamelCase`
    'camelcase': 'off',
    // It is not mandatory to use `this` keyword to call class methods.
    'class-methods-use-this': 'off',
    // A trailing comma is required when the last element or attribute is on a
    // different line than the closing bracket `]` or `}`;
    // Trailing commas are prohibited when on the same line
    'comma-dangle': ['error', 'always-multiline'],
    'dot-notation': 'off',
    // When defining a function or calling a function, whether to wrap the
    // parentheses or not requires the two parentheses to be consistent.
    'function-paren-newline': ['error', 'consistent'],
    // When calling a function, whether to wrap the brackets in a new line
    // requires the two brackets to be consistent.
    'function-call-argument-newline': ['error', 'consistent'],
    'global-require': 'off',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    // Temporarily fix the problem of ESLint8+ misjudging the indentation of
    // properties with decorators
    // https://github.com/eslint/eslint/issues/15299
    'indent': ['error', 2, {
      'SwitchCase': 1,
      'ignoredNodes': ['PropertyDefinition'],
      'MemberExpression': 1,
      'FunctionDeclaration': {
        'body': 1,
        'parameters': 2,
      },
    }],
    'max-classes-per-file': ['warn', 1],
    'max-len': ['warn', {
      code: 120,
      tabWidth: 2,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // Allow the `continue` keyword
    'no-continue': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-else-return': 'off',
    'no-irregular-whitespace': 'off',
    // Allow `new` an object but not assign it to a variable
    'no-new': 'off',
    // Allows creation of wrapper object instances of basic types `String`,
    // `Number`, `Boolean`
    'no-new-wrappers': 'off',
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    // Allows an expression to stand alone as a statement without assigning its
    // value to any variable
    'no-unused-expressions': 'off',
    'object-curly-newline': ['warn', {
      'multiline': true,
      'consistent': true,
    }],
    'prefer-destructuring': 'off',
    'quote-props': ['error', 'consistent'],
    'semi': ['error', 'always'],
    'spaced-comment': ['error', 'always', { exceptions: ['*'] }],
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
};

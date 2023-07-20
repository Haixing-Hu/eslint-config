/*******************************************************************************
 *
 *    Copyright (c) 2017 - 2022
 *    Nanjing Smart Medical Investment Operation Service Co. Ltd.
 *    All rights reserved.
 *
 ******************************************************************************/

/**
 * 符合智慧医疗公司JavaScript编码规范的ESLint规则配置。
 *
 * @author 胡海星
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
    'airbnb-base',                // 以 Airbnb 的JavaScript编码风格规则文件为基础
    'plugin:vue/recommended',     // 加上Vue.js官方推荐的Vue组件编码风格规则
  ],
  rules: {                        // 再加上智慧医疗自己内部的规则
    // 不强制使用 CamelCase
    'camelcase': 'off',
    // 类方法中不强制使用this关键词进行调用。
    'class-methods-use-this': 'off',
    // 当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，要求使用拖尾逗号；
    // 当在同一行时，禁止使用拖尾逗号
    'comma-dangle': ['error', 'always-multiline'],
    'dot-notation': 'off',
    // 函数定义或函数调用时，括号处是否换行，需要两个括号保持一致
    'function-paren-newline': ['error', 'consistent'],
    // 函数调用时，括号处是否换行，需要两个括号保持一致
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
    // 临时性修复 ESLint8+ 对有装饰器的 property 的缩进错误判断的问题
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
    // 允许使用 continue 关键词
    'no-continue': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-else-return': 'off',
    'no-irregular-whitespace': 'off',
    // 允许 new 一个对象但不将其赋值给某个变量
    'no-new': 'off',
    // 允许创建基本类型 String, Number, Boolean 的包装器对象实例
    'no-new-wrappers': 'off',
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    // 允许将一个表达式单独作为一条语句而不将其值赋予任何变量
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
    parser: '@babel/eslint-parser',
  },
};




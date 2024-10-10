/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier/skip-formatting'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true, // 单引号
        arrowParens: 'avoid', // 箭头函数参数只有一个值时是否要有小括号。avoid：省略括号
        endOfLine: 'auto', // 行尾换行符
        bracketSpacing: true, // 对象大括号直接是否有空格，例如：{ foo: bar }
        semi: false, // 语句末尾是否有分号
        tabWidth: 2, // 缩进字节数
        trailingComma: 'none', // 多行逗号分隔是否需要有空格
        printWidth: 110 // 单行打印宽度
      }
    ],
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['index']
      }
    ],
    'vue/no-setup-props-destructure': ['off'], // 关闭props解构的效验
    'no-undef': 'error' // 关闭未使用的变量的效验
  }
}

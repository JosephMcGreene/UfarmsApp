module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  importOrder: [
    '^~utils/loadEnv',
    '^react$',
    '^prop-types(.*)',
    '<THIRD_PARTY_MODULES>',
    '^~(.*)$',
    '^[./]'
  ],
  importOrderCaseInsensitive: true,
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  printWidth: 80,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all'
}

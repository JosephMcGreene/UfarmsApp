module.exports = {
  extends: ['universe/native', 'prettier', 'standard'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@stylistic', 'react', 'sort-keys-fix'],
  root: true,
  rules: {
    '@stylistic/arrow-parens': ['error', 'as-needed'],
    '@stylistic/comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        exports: 'only-multiline',
        functions: 'only-multiline',
        imports: 'only-multiline',
        objects: 'only-multiline'
      }
    ],
    '@stylistic/indent': ['error', 2],
    '@stylistic/quotes': ['error', 'single'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        pathGroups: [
          {
            group: 'external',
            pattern: 'react',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['react']
      }
    ],
    'no-console': 'warn',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'react/jsx-sort-props': 'error',
    'react/react-in-jsx-scope': 'off',
    'sort-keys-fix/sort-keys-fix': 'error',
    'sort-vars': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        asyncArrow: 'never',
        named: 'never'
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}

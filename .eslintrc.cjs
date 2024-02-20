module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },

    extends: [
        'standard',
        '.eslintrc-auto-import.json'
    ],

    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: [
            'babel-eslint'
        ]
    },

    rules: {
        indent: ['error', 4],
        'no-debugger': 'off',
        'multiline-ternary': 'off',
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'padding-line-between-statements': ['error',
            { blankLine: 'always', prev: 'import', next: 'export' },
            { blankLine: 'always', prev: 'block-like', next: 'block-like' }
        ]
    },

    overrides: [
        {
            files: ['*.vue'],

            extends: [
                'plugin:vue/vue3-strongly-recommended'
            ],

            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                parser: [
                    'babel-eslint'
                ]
            },

            plugins: [
                'vue'
            ],

            rules: {
                'vue/html-indent': ['error', 4],
                'vue/multi-word-component-names': 'off',
                'vue/new-line-between-multi-line-property': ['error', { minLineOfMultilineProperty: 2 }],
                'vue/padding-line-between-tags': ['error', [{
                    blankLine: 'always', prev: '*', next: '*'
                }]]
            }
        }
    ]
}

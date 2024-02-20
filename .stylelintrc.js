module.exports = {
    defaultSeverity: 'error',
    customSyntax: 'postcss-scss',

    extends: [
        'stylelint-config-html/vue',
        'stylelint-config-standard',
        'stylelint-config-prettier',
        'stylelint-config-recommended-vue',
        'stylelint-config-recommended-scss'
    ],

    plugins: [
        'stylelint-order'
    ],

    rules: {
        // 缩进
        indentation: 4,
        'no-descending-specificity': null,
        'scss/no-global-function-names': null, // map-get() 等函数不报错
        'selector-pseudo-element-no-unknown': [true, {
            ignorePseudoElements: ['v-deep']
        }],
        'selector-pseudo-class-no-unknown': [true, {
            ignorePseudoClasses: ['deep']
        }],
        'number-leading-zero': 'never',
        'alpha-value-notation': 'number',
        'color-function-notation': 'legacy',
        // 为类选择器指定一个模式
        'selector-class-pattern': /^el-*|^r-*|^[a-zA-Z][a-zA-Z0-9-]*$/,
        // 禁止字体家族名称列表中缺少通用家族
        'font-family-no-missing-generic-family-keyword': [true, {
            ignoreFontFamilies: ['nf-icon']
        }],
        // 不要使用已被 autoprefixer 支持的浏览器前缀
        'media-feature-name-no-vendor-prefix': true,
        'import-notation': 'string',
        'scss/at-import-partial-extension': 'always',
        'at-rule-no-vendor-prefix': true,
        'selector-no-vendor-prefix': true,
        'property-no-vendor-prefix': true,
        'value-no-vendor-prefix': true,
        // 最多允许嵌套层
        'max-nesting-depth': 7,
        // 颜色值要小写
        'color-hex-case': 'lower',
        // 颜色值能短则短
        'color-hex-length': 'short'
        // 不能用important
        // 'declaration-no-important': true
        // 'scale-unlimited/declaration-strict-value': [
        // [
        // /color/
        // ]
        // ]
    },

    overrides: [
        {
            files: ['*.vue', '**/*.vue', '*.html', '**/*.html'],
            customSyntax: 'postcss-html',
            rules: {
                // 'unit-allowed-list': ['em', 'rem', 's', 'px']
            }
        }
    ]
}

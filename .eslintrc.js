module.exports = {
    root: true,
    env: {
        node: true,
    },
    parser: 'vue-eslint-parser',
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/typescript/recommended',
    ],
    rules: {
        'vue/multi-word-component-names': 'off',
        'indent': ['error', 4],
    },
}

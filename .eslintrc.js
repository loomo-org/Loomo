export default {
    root: true,
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        // Module-specific rules
        'no-restricted-imports': [
            'error',
            {
                patterns: ['../'],
            },
        ],
        'import/no-default-export': 'error',
        'import/prefer-default-export': 'off',

        // TypeScript and general rules
        '@typescript-eslint/no-explicit-any': 'warn',
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
    },
    ignorePatterns: ['dist', 'build', 'node_modules'],
}

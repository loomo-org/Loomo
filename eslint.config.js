// eslint.config.js
const tsPlugin = require('@typescript-eslint/eslint-plugin')
const tsParser = require('@typescript-eslint/parser')

module.exports = [
    {
        ignores: ['**/dist/**', '**/node_modules/**'],
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tsParser,
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            // TypeScript Rules
            '@typescript-eslint/no-require-imports': 'error', // Disable `require()` imports
            '@typescript-eslint/no-explicit-any': 'error', // Disallow `any` type
            '@typescript-eslint/no-unused-vars': 'warn', // Warn on unused variables
            '@typescript-eslint/explicit-function-return-type': 'warn', // Enforce return types for functions
            '@typescript-eslint/consistent-type-imports': 'error', // Enforce consistent type imports
            '@typescript-eslint/no-non-null-assertion': 'error', // Disallow non-null assertions (`!`)

            // General ESLint Rules
            'no-console': 'warn', // Warn on `console.log` usage
            'no-debugger': 'error', // Disallow `debugger` statements
            'no-unused-expressions': 'error', // Disallow unused expressions
            'no-var': 'error', // Use `let` or `const` instead of `var`
            'prefer-const': 'error', // Prefer `const` over `let` for variables that don't change
            eqeqeq: 'error', // Require `===` and `!==` instead of `==` and `!=`
            curly: 'error', // Require curly braces for control statements
            'arrow-body-style': ['error', 'as-needed'], // Prefer concise arrow functions
            'no-multiple-empty-lines': ['error', { max: 1 }], // Limit multiple empty lines
            quotes: ['error', 'single'], // Enforce single quotes
            semi: ['error', 'always'], // Require semicolons
            indent: ['error', 2], // Use 2 spaces for indentation
            'comma-dangle': ['error', 'always-multiline'], // Require trailing commas in multiline objects/arrays
            'object-curly-spacing': ['error', 'always'], // Enforce spacing inside curly braces
            'array-bracket-spacing': ['error', 'never'], // Disallow spacing inside array brackets
            'space-before-function-paren': ['error', 'never'], // Disallow space before function parentheses
        },
    },
]

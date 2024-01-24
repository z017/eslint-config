import stylistic from '@stylistic/eslint-plugin';

function defineConfig() {
  return [
    {
        name: "test-name",
        files: ["**/*.ts"],
        plugins: {
            '@stylistic' : stylistic,
        },
        rules: {
            '@stylistic/semi': ['error', 'never'],
        }
        // 'env': {
        //     'browser': true,
        //     'es2021': true,
        //     'node': true
        // },
        // 'extends': [
        //     'eslint:recommended',
        //     'plugin:@typescript-eslint/recommended'
        // ],
        // 'overrides': [
        //     {
        //         'env': {
        //             'node': true
        //         },
        //         'files': [
        //             '.eslintrc.{js,cjs}'
        //         ],
        //         'parserOptions': {
        //             'sourceType': 'script'
        //         }
        //     }
        // ],
        // 'parser': '@typescript-eslint/parser',
        // 'parserOptions': {
        //     'ecmaVersion': 'latest',
        //     'sourceType': 'module'
        // },
        // 'plugins': [
        //     '@typescript-eslint'
        // ],
        // 'rules': {
        //     'indent': [
        //         'error',
        //         4
        //     ],
        //     'linebreak-style': [
        //         'error',
        //         'unix'
        //     ],
        //     'quotes': [
        //         'error',
        //         'single'
        //     ],
        //     'semi': [
        //         'error',
        //         'never'
        //     ]
        // }
    }
];
}

export {defineConfig};

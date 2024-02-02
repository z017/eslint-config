
import stylistic from '@stylistic/eslint-plugin'
import { FlatConfigItem } from './types'

/**
 * Construct an array of ESLint flat config items.
 */
export async function defineConfig():Promise<FlatConfigItem[]> {
    return [
    // global ignores
    {
        name: "ignored",
        ignores: ["node_modules/**", "build/**", "dist/**"],
    },
    {
        name: "js and ts style",
        files: ["**/*.jsx?", "**/*.tsx?"],
        plugins: {
            '@stylistic' : stylistic,
        },
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module"
        },
        rules: {
            '@stylistic/semi': ['error', 'never'],
        }
    },
    {
        name: 'config files',
        files: ["**/*.config.js", "**/*.config.ts"],
        languageOptions: {
            // env node
            sourceType: "script"
        },
    }
]
}

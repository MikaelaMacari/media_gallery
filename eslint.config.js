import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import unusedImports from "eslint-plugin-unused-imports";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import stylisticTs from "@stylistic/eslint-plugin-ts";
import parserTs from "@typescript-eslint/parser";
import tseslint from "typescript-eslint";

export default tseslint.config(
    { ignores: ["dist"] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parser: parserTs,
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "unused-imports": unusedImports,
            "simple-import-sort": simpleImportSort,
            "@stylistic/ts": stylisticTs,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
            "no-unused-vars": "off",
            "unused-imports/no-unused-imports": "error",
            "simple-import-sort/exports": "error",
            "unused-imports/no-unused-vars": [
                "warn",
                {
                    vars: "all",
                    varsIgnorePattern: "^_",
                    args: "after-used",
                    argsIgnorePattern: "^_",
                },
            ],
            "simple-import-sort/imports": [
                "error",
                {
                    groups: [
                        // `react` first, `next` second, then packages starting with a character
                        ["^react$", "^next", "^[a-z]"],
                        // Packages starting with `@`
                        ["^@"],
                        // Packages starting with `~`
                        ["^~"],
                        // Imports starting with `../`
                        ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                        // Imports starting with `./`
                        ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                        // Style imports
                        ["^.+\\.s?css$"],
                        // Side effect imports
                        ["^\\u0000"],
                    ],
                },
            ],
            "@stylistic/ts/indent": ["error", 2],
            "@stylistic/ts/quotes": ["error", "single"],
        },
    },
);

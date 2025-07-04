import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import typescriptParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import tseslint from "@typescript-eslint/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 11,
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      import: importPlugin,
      react: react,
      "@typescript-eslint": tseslint,
    },
    rules: {
      semi: "error",
      "no-unused-vars": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      // TODO: enable it once we drop support for TS<5.0
      // https://github.com/typescript-eslint/typescript-eslint/issues/10065
      "@typescript-eslint/consistent-type-exports": [
        "off", // 'error',
        { fixMixedExportsWithInlineTypeSpecifier: true },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          varsIgnorePattern: "^_",
        },
      ],
      curly: ["error", "all"],
      "no-console": "error",
      // disallow imports from duplicate paths
      "import/no-duplicates": "error",
    },
  },
];

export default eslintConfig;

/* eslint-disable import-x/no-named-as-default-member */
import nextPlugin from "@next/eslint-plugin-next";
import reactHooksPlugin from "eslint-plugin-react-hooks";

const { configs: nextConfigs } = nextPlugin;
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import * as typescriptParser from "@typescript-eslint/parser";
import compat from "eslint-plugin-compat";
import { importX } from "eslint-plugin-import-x";
import n from "eslint-plugin-n";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import promise from "eslint-plugin-promise";
import sonarjs, { configs as sonarjsConfigs } from "eslint-plugin-sonarjs";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";

const config = [
  importX.flatConfigs.typescript,
  {
    ignores: [
      // ── Build / framework output ──────────────────────────────────────
      "**/dist",
      "**/build",
      "**/out",
      "**/.next",
      "**/.open-next",
      "**/.nuxt",
      "**/.output",
      "**/.svelte-kit",
      "**/.vitepress/cache",
      "**/.vitepress/dist",
      "**/.turbo",
      "**/.vercel",
      "**/.netlify",
      "**/.docusaurus",
      "**/.cache",
      "**/.parcel-cache",
      "**/.vite",
      "**/.astro",
      "**/_astro",
      "**/public/build",
      "**/storybook-static",

      // ── Generated code ────────────────────────────────────────────────
      "**/_generated",
      "**/*.gen.*",
      "**/*.generated.*",
      "**/*.auto.*",
      "**/generated",
      "**/auto-generated",
      "**/codegen",
      "**/__generated__",
      "**/graphql-types.*",
      "**/schema.d.ts",
      "**/schema.graphql.d.ts",
      "**/*.d.ts.map",

      // ── Test coverage ─────────────────────────────────────────────────
      "**/coverage",
      "**/.nyc_output",

      // ── Mobile ────────────────────────────────────────────────────────
      "**/.expo",
      "**/.expo-shared",
      "**/android/build",
      "**/ios/build",
      "**/DerivedData/**/*",

      // ── Lock files ────────────────────────────────────────────────────
      "**/bun.lock",
      "**/bun.lockb",
      "**/package-lock.json",
      "**/yarn.lock",
      "**/pnpm-lock.yaml",

      // ── Framework type definitions ────────────────────────────────────
      "**/next-env.d.ts",
      "**/worker-configuration.d.ts",
    ],
  },
  {
    files: [
      "**/*.js",
      "**/*.ts",
      "**/*.mjs",
      "**/*.cjs",
      "**/*.html",
      "**/*.tsx",
      "**/*.jsx",
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      compat,
      "import-x": importX,
      n,
      promise,
      sonarjs,
      unicorn,
      "unused-imports": unusedImports,
    },
    rules: {
      ...importX.flatConfigs.recommended.rules,
      ...promise.configs["flat/recommended"].rules,
      ...n.configs["flat/recommended"].rules,
      ...sonarjsConfigs.recommended.rules,
      ...compat.configs.recommended.rules,
      ...unicorn.configs["recommended"].rules,

      // Configure unused imports rule overrides
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // Disable Node.js-specific rules that cause false positives in frontend/Next.js code
      "n/no-missing-import": "off",
      "n/no-unpublished-import": "off",
      "n/no-extraneous-import": "off",
      "n/no-unsupported-features/node-builtins": "off",

      // Disable SonarJS rules that are too strict for React components
      "sonarjs/prefer-read-only-props": "off",

      // Unicorn rule overrides
      "unicorn/prevent-abbreviations": "off",
      "unicorn/filename-case": "off",
      "unicorn/no-null": "off",
      "unicorn/prefer-module": "off",
    },
    settings: {
      "import-x/parsers": {
        espree: [".js", ".cjs", ".mjs", ".ts", ".tsx"],
      },
      "import-x/resolver": {
        node: true,
        typescript: true,
      },
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    plugins: {
      "@next/next": nextPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      ...nextConfigs.recommended.rules,
      ...nextConfigs["core-web-vitals"].rules,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  eslintPluginPrettierRecommended,
];

export default config;

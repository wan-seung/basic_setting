// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    "react-native/react-native": true,
  },

  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  // 'standard', 'eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'
  extends: [
    "next",
    "next/core-web-vitals",
    "airbnb-base",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "@react-native-community",
  ],
  // required to lint *.vue files
  plugins: ["react", "prettier", "react-hooks", "react-native"],
  // add your custom rules here
  ignorePatterns: ["temp.js", "node_modules/"],
  rules: {
    "prettier/prettier": "error",
    "constructor-super": "warn",
    "for-direction": 2,
    "getter-return": 2,
    "no-async-promise-executor": 2,
    "no-case-declarations": 2,
    "no-class-assign": 2,
    "no-compare-neg-zero": 2,
    "no-cond-assign": 2,
    "no-const-assign": "warn",
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-delete-var": 2,
    "no-dupe-args": 2,
    "no-dupe-class-members": 2,
    "no-dupe-else-if": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-empty-pattern": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-semi": 2,
    "no-fallthrough": 2,
    "no-func-assign": 2,
    "no-global-assign": 2,
    "no-import-assign": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-misleading-character-class": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-new-symbol": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-prototype-builtins": 2,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-self-assign": 2,
    "no-setter-return": 2,
    "no-shadow-restricted-names": 2,
    "no-sparse-arrays": 2,
    "no-this-before-super": "warn",
    "no-undef": "warn",
    "no-unexpected-multiline": 2,
    "no-unreachable": "warn",
    "no-unsafe-finally": 2,
    "no-unsafe-negation": 2,
    "no-unused-labels": 1,
    "import/no-named-as-default": 0,
    // 불필요한 변수
    "no-unused-vars": [
      1,
      { vars: "all", args: "after-used", ignoreRestSiblings: true },
    ],
    "no-useless-catch": 2,
    "no-useless-escape": 2,
    "no-with": 2,
    "require-yield": 2,
    "use-isnan": 2,
    "valid-typeof": "warn",
    "generator-star-spacing": "off",
    // 불필요한 스타일
    "react-native/no-unused-styles": 2,
    // 불필요한 배열
    "react-native/no-single-element-style-arrays": 2,
    // 인라인 스타일
    "react-native/no-inline-styles": 0,
    // 인라인 함수
    "react/jsx-no-bind": [
      2,
      {
        ignoreDOMComponents: false,
        ignoreRefs: false,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
      },
    ],
    // 비효율적인 Component
    "react/require-optimization": 2,
    // react-hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-param-reassign": [2, { props: false }],
    semi: "error",
    indent: [2, 2, { SwitchCase: 1 }],
    "comma-style": ["error", "last"],
    "arrow-parens": "off",
    "no-console": "off",
    eqeqeq: "off",
    curly: "error",
    quotes: ["error", "single", "avoid-escape"],
    "react/no-set-state": "off",
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "react-native-gesture-handler",
            importNames: [
              "TouchableOpacity",
              "TouchableNativeFeedback",
              "TouchableHighlight",
              "TouchableWithoutFeedback",
            ],
            message: "Please import it from 'react-native' instead.",
          },
        ],
      },
    ],
  },
};
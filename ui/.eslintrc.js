module.exports = {
  "extends": [
    "airbnb",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "react-hooks",
    "@typescript-eslint",
    "prettier"
  ],
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true,
      "jsx": true
    }
  },
  "settings": {
    "extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/core-modules": [
      "react"
    ],
    "import/resolver": {
      "babel-module": {}
    }
  },
  "env": {
    "browser": true,
    "jest": true
  },
  "globals": {
    "ISPRODUCTION": false,
    "chrome": false
  },
  "rules": {
    "import/order": ["error", {
      "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
      "newlines-between": "always"
    }],
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": ["error", { "peerDependencies": true }],
    "prettier/prettier": "error",
    "no-confusing-arrow": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".jsx", ".tsx"] }],
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-angle-bracket-type-assertion": "error",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-parameter-properties": "error",
    "@typescript-eslint/no-triple-slash-reference": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/explicit-function-return-type": ["warn", { "allowExpressions": true }],
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/member-naming": ["error", { "private": "^_" }]
  }
}

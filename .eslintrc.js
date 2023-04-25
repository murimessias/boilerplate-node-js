module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      { ignoreRestSiblings: true },
    ],
    camelcase: "off",
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
        imports: "always-multiline",
        objects: "always-multiline",
      },
    ],
    "no-unused-vars": "off",
    "no-warning-comments": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
};

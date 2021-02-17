const { singleQuote } = require("./.prettierrc");

module.exports = {
  root: true,
  extends: "@react-native-community",
  rules: {
    "quotes": [2, "double", { "avoidEscape": true }],
    "react-hooks/exhaustive-deps": "off"
  }
};

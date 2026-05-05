module.exports = [
  ...require("eslint-config-next/core-web-vitals"),
  {
    ignores: ["public/**", ".next/**", "out/**", "build/**"],
  },
];

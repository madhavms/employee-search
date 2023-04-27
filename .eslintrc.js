module.exports = {
   parser: "@typescript-eslint/parser",
   plugins: ["@typescript-eslint"],
   extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier"
   ],
   rules: {
      // Require semicolons at the end of statements
      semi: ["error", "always"],
  
      // Disallow unused variables and parameters
      "@typescript-eslint/no-unused-vars": "error",
  
      // Disallow variable declarations from shadowing variables declared in the outer scope
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": "error",
  
      // Require a consistent member delimiter style in interfaces and type literals
      "@typescript-eslint/member-delimiter-style": [
         "error",
         {
            multiline: {
               delimiter: "semi",
               requireLast: true
            },
            singleline: {
               delimiter: "semi",
               requireLast: false
            }
         }
      ],
  
      // Require or disallow the use of parentheses around arrow function arguments
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
  
      // Enforce consistent spacing before and after type annotations
      "@typescript-eslint/type-annotation-spacing": "error",
  
      // Disallow the use of `var` to declare variables
      "no-var": "error",
  
      // Disallow the use of `eval()`-like methods
      "no-eval": "error",
  
      // Enforce consistent use of quotes for string literals
      quotes: ["error", "double"],

      ignorePatterns: [".eslintrc.js"],
  
      // Enforce consistent indentation
      indent: [
         "error",
         3,
         {
            SwitchCase: 1,
            ignoredNodes: ["JSXElement"]
         }
      ]
   }
};
  
module.exports = {
  "root": true,
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react",
    "react-app",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:flowtype/recommended"
  ],
  "plugins": [
    "react",
    "prettier",
    "flowtype"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2016,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true,
    "jest": true,
    "mocha": true
  },
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    }
  },
  "rules": {
    "react/jsx-filename-extension": "off",
    "react/sort-comp": "off",
    "no-debugger": "off",
    "no-console": "off",
    "react/prop-types": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],
    "no-unused-vars": [
      "error",
      {
        "args": "after-used",
        "ignoreRestSiblings": false
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "semi": true,
        "bracketSpacing": false,
        "trailingComma": "es5",
      },
    ],
  }
}

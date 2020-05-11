module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-no-bind": ["error", {
            "allowArrowFunctions": true,
            "allowBind": false,
            "ignoreRefs": true
          }],
          "react/no-did-update-set-state": "error",
          "react/no-unknown-property": "error",
          "react/no-unused-prop-types": "error",
          "react/prop-types": "error",
          "react/react-in-jsx-scope": "error"
    }
};

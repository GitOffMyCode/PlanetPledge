module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
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
        "ecmaVersion": 2018
    },
    "plugins": [
        "react"
    ],
    "rules": {
<<<<<<< HEAD
        "no-multi-spaces": "warn",
        "no-multiple-empty-lines": "error"
=======
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": "error",
>>>>>>> 75d5ae867547e1fed8f428057eda52b149f1ea7a
        // "indent": ["error", 2]
    }
};
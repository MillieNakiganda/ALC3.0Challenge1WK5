module.exports = {
    "extends": "airbnb-base",
  "rules": {
  "no-console": 0,
  "prefer-arrow-callback": 0,
  "linebreak-style": ["error", "windows"],
  "no-param-reassign": [2, {"props": false}],
  "prefer-destructuring": 0,
  "arrow-body-style": 0,
  "comma-dangle": 0,
  "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  },
  "env": {
  "commonjs": true,
  "node": true,
  "mocha": true
  },
  };
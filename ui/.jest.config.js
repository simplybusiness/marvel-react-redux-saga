module.exports = {
  setupTestFrameworkScriptFile: "<rootDir>/.jest.setup.js",
  snapshotSerializers: ['jest-emotion'],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
    ".+\\.(png|jpg|svg)$": "jest-transform-stub",
  },
  testRegex: "(/(__tests__)/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json"
  ],
  reporters: [
    "default"
  ],
  globals: {
    ISPRODUCTION: false
  },
};

module.exports = {
  testRegex: "(/(__tests__)/.*|(\\.|/)(test|spec))\\.(js|ts)$",
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/build/"
  ],
  moduleFileExtensions: [
    "ts",
    "js",
    "json"
  ],
  reporters: [
    "default"
  ],
  globals: {
    ISPRODUCTION: false
  },
};

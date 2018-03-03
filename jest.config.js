const path = require("path");

module.exports = {
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupTestFrameworkScriptFile: "./setupTests.js",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.tsx"],
  testPathIgnorePatterns: ["/node_modules/", "/cypress/"],
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  },
  globals: {
    "ts-jest": {
      tsConfigFile: path.join(__dirname, "tsconfig.json")
    }
  }
};

module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/components$1",
    "^@pages(.*)$": "<rootDir>/pages$1",
    "^@hooks(.*)$": "<rootDir>/hooks$1",
    "\\.(css|less)$": "<rootDir>/__tests__/__mocks__/stylesMock.js",
  },
  testEnvironment: "jsdom",
};

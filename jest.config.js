module.exports = {
  setupFiles: ["<rootDir>/jestSetupFile.js"],
  preset: "jest-expo",
  collectCoverageFrom: [
    "(app|components|hooks|stores|lib|providers)/**/*.{ts,tsx}",
  ],
  collectCoverage: false,
  coverageThreshold: {
    global: {
      branches: 0,
      lines: 0,
      functions: 0,
      statements: 0,
    },
  },
};

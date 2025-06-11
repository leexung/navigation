module.exports = {
  setupFiles: ["<rootDir>/jestSetupFile.js"],
  preset: "jest-expo",
  collectCoverageFrom: [
    "(app|components|hooks|stores|lib|providers)/**/*.{ts,tsx}",
  ],
  collectCoverage: false,
  coverageThreshold: {
    global: {
      branches: 60,
      lines: 80,
      functions: 70,
      statements: 80,
    },
  },
};

module.exports = {
  setupFiles: ["<rootDir>/jestSetupFile.js"],
  preset: "jest-expo",
  collectCoverageFrom: [
    "(app|components|hooks|stores|lib|providers)/**/*.{ts,tsx}",
  ],
  transformIgnorePatterns: [
    // Đây là phần quan trọng: loại trừ các thư viện này khỏi việc bị bỏ qua transform
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

// // jest.config.js
// module.exports = {
//   preset: 'react-native',
//   // ... các cấu hình khác của bạn ...
//   transformIgnorePatterns: [
//     // Đây là phần quan trọng: loại trừ các thư viện này khỏi việc bị bỏ qua transform
//     'node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation|expo(nent)?|@expo(nent)?/.*|sentry-expo|native-base|react-native-svg|react-native-reanimated|react-native-safe-area-context|@gorhom/bottom-sheet|react-native-video|expo-linear-gradient|lucide-react-native)',
//   ],
//   // ... các cấu hình khác ...
// };
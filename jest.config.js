// module.exports = {
//   setupFiles: ["<rootDir>/jestSetupFile.js"],
//   preset: "jest-expo",
//   collectCoverageFrom: [
//     "(app|components|hooks|stores|lib|providers)/**/*.{ts,tsx}",
//   ],
//   collectCoverage: false,
//   coverageThreshold: {
//     global: {
//       branches: 0,
//       lines: 0,
//       functions: 0,
//       statements: 0,
//     },
//   },
// };

// jest.config.js
module.exports = {
  preset: "react-native",
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation|expo(nent)?|@expo(nent)?/.*|sentry-expo|native-base|react-native-svg|react-native-reanimated|react-native-safe-area-context|@gorhom/bottom-sheet|react-native-video|expo-linear-gradient|lucide-react-native|@react-native/.*|@unimodules/.*|expo-router|expo-constants|expo-asset|expo-file-system|expo-permissions|expo-image-picker|expo-sharing|expo-application|expo-status-bar)",
    // ^^^^^^ Đảm bảo bạn đã thêm các package Expo cụ thể này và các package khác mà bạn dùng
  ],
  setupFiles: ["<rootDir>/jestSetupFile.js"],
  // ... các cấu hình khác của bạn ...
  moduleNameMapper: {
    // Ánh xạ '@/' tới thư mục gốc của project (thường là `./`) hoặc thư mục `src/`
    // Tùy thuộc vào cách bạn định nghĩa paths trong tsconfig.json/jsconfig.json
    "^@/(.*)$": "<rootDir>/$1",
    // Hoặc nếu alias của bạn trỏ vào thư mục `src`:
    // '^@/(.*)$': '<rootDir>/src/$1',

    // Ví dụ nếu bạn có các alias khác:
    // '^@components/(.*)$': '<rootDir>/src/components/$1',
    // '^@assets/(.*)$': '<rootDir>/assets/$1',
  },
};
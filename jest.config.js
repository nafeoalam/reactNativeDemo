module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    // Map `@/*` to `./src/*`
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // You may also need to specify the module file extensions Jest should process
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  // Ensure no necessary directories are ignored
  testPathIgnorePatterns: ['/node_modules/'],
};

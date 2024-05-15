module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  testPathIgnorePatterns: [
    './node_modules/', // Ignore node_modules
    './app/App.tsx' // Ignore App.ts
  ]
};

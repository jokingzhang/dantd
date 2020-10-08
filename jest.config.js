module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      babelConfig: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    },
  },
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/components/**/__tests__/**/*.{ts,tsx,js,jsx,mjs}',
    '<rootDir>/components/**/?(*.)(spec|test).{ts,tsx,js,jsx,mjs}',
  ],
  reporters: ['default', 'jest-html-reporters'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: ['app/react/**/*.{ts,tsx}', '!app/react/__tests__/api/api-test-helpers.ts'],
};

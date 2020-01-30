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
    '<rootDir>/src/**/__tests__/**/*.{ts,tsx,js,jsx,mjs}',
    '<rootDir>/src/**/?(*.)(spec|test).{ts,tsx,js,jsx,mjs}',
  ],
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: '测试报告',
      },
    ],
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: ['app/react/**/*.{ts,tsx}', '!app/react/__tests__/api/api-test-helpers.ts'],
};

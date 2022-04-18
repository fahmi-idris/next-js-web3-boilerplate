const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.(jsx?|js?|tsx?|ts?)?$': 'babel-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/src/graphql/*'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: false,
};

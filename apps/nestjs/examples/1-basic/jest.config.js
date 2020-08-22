module.exports = {
  name: 'nestjs-examples-1-basic',
  preset: '../../../../jest.config.js',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  coverageDirectory: '../../../../coverage/apps/nestjs/examples/1-basic',
};

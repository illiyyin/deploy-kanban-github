/** @type {import('ts-jest').JestConfigWithTsJest} */
export default { // Diperbarui ke sintaks untuk module ES
  testEnvironment: 'jsdom',
  preset: 'ts-jest/presets/default-esm',
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
}
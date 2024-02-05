module.exports = {
  preset: 'ts-jest',
  coverageThreshold: {
    global: {
      statements: 85,
      branches: 85,
      functions: 85,
      lines: 85,
    },
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['.stories.tsx', '.stories.ts', 'icons.ts', 'index.ts', 'types/'],
  roots: ['<rootDir>'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['/node_modules/', '/out/', '/build/', '/dist/'],
  coverageReporters: ['html', 'text', 'text-summary'],
  testEnvironment: 'jsdom',
}

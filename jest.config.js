module.exports = {
    preset: 'ts-jest',
    //collectCoverageFrom: [
    //"src/**/*.{js,js}"
    //],
    testMatch: ['**/__test__/**/*-test.ts'],
    coverageThreshold: {
        global: {
            statements: 100,
            branches: 100,
            functions: 100,
            lines: 100
        }
    }
};

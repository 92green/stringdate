// @flow
module.exports = {
    preset: 'blueflag-test',
    testEnvironment: 'node',
    //collectCoverageFrom: [
        //"src/**/*.{js,js}"
    //],
    testMatch: ["**/__test__/**/*-test.js?(x)"],
    coverageThreshold: {
        global: {
            statements: 100,
            branches: 100,
            functions: 100,
            lines: 100
        }
    }
};

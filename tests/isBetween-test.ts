import isBetween from '../src/isBetween';

describe('isBetween', () => {
    test.each([
        ['2020-01-01', '2019-01-01', '2021-01-01', true], // Inside
        ['2021-01-01', '2019-01-01', '2021-01-01', false], // On the edge
        ['2018-01-01', '2019-01-01', '2021-01-01', false]
    ])('%p isBetween %p and %p', (value, start, end, expected) => {
        expect(isBetween(start, end)(value)).toBe(expected);
    });
});

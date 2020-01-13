// @flow
import isBetween from '../isBetween';

describe('isBetween', () => {

    test.each([
        ['2020-01-10T22:50:20.000Z', '2020-01-10T22:41:20.000Z', '2020-12-31T23:59:59.999Z', true],
        ['2020-01-10T22:00:20.000Z', '2020-01-10T22:41:20.000Z', '2020-12-31T23:59:59.999Z', false],
        ['2020-01-01', '2019-01-01', '2021-01-01', true],
        ['2018-01-01', '2019-01-01', '2021-01-01', false]

    ])('%p isBetween %p and %p', (value, start, end, expected) => {
        expect(isBetween(start, end)(value)).toBe(expected);
    });

});

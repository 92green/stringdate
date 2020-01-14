// @flow
import max from '../max';

describe('max', () => {

    test.each([
        // dates
        ['2020-01-01', '2019-01-01', '2020-01-01'],
        ['2020-02-01', '2020-01-01', '2020-02-01'],
        ['2020-01-08', '2020-01-10', '2020-01-10'],
        // durations
        ['P1Y', 'P1D', 'P1Y'],
        ['P9D', 'P1W', 'P9D'],
        ['P1Y1D', 'P12M', 'P12M']

    ])('max(%p)(%p)', (compare, value, expected) => {
        expect(max(compare)(value)).toBe(expected);
    });

});

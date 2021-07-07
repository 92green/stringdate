import min from '../min';

describe('min', () => {
    test.each([
        // dates
        ['2020-01-01', '2019-01-01', '2019-01-01'],
        ['2020-02-01', '2020-01-01', '2020-01-01'],
        ['2020-01-08', '2020-01-10', '2020-01-08'], // durations
        ['P1Y', 'P1D', 'P1D'],
        ['P1D', 'P1Y', 'P1D'],
        ['P9D', 'P1W', 'P7D'],
        ['P1Y1D', 'P12M', 'P12M']
    ])('min(%p)(%p)', (compare, value, expected) => {
        expect(min(compare)(value)).toBe(expected);
    });
});

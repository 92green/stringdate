// @flow
import isBefore from '../isBefore';

describe('isBefore', () => {

    test.each([
        ['2019-01-10T22:41:20.000+1100', '2020-01-01T00:00:00.000+1100', true],
        ['2020-01-10T22:41:20.000+1100', '2020-01-01T00:00:00.000+1100', false],
        ['2019-01-10T22:41:20.000Z', '2020-01-01T00:00:00.000Z', true],
        ['2020-01-10T22:41:20.000Z', '2020-01-01T00:00:00.000Z', false],
        ['2020-01-10', '2020-01-01', false],
        ['2019-01-10', '2020-01-01', true]
    ])('%p < %p', (value, compare, expected) => {
        expect(isBefore(compare)(value)).toBe(expected);
    });

});

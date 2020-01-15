// @flow
import isBefore from '../isBefore';

describe('isBefore', () => {

    test.each([
        ['2020-01-10', '2020-01-01', false],
        ['2019-01-10', '2020-01-01', true]
    ])('%p < %p', (value, compare, expected) => {
        expect(isBefore(compare)(value)).toBe(expected);
    });

});

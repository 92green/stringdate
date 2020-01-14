// @flow
import isAfter from '../isAfter';

describe('isAfter', () => {

    test.each([
        ['2019-01-10', '2020-01-01', false],
        ['2020-01-10', '2020-01-01', true]
    ])('%p < %p', (value, compare, expected) => {
        expect(isAfter(compare)(value)).toBe(expected);
    });

});

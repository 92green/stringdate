// @flow
import isSame from '../isSame';

describe('isSame', () => {

    test.each([
        ['year', '2020-01-10', '2020-12-31', true],
        ['year', '2020-01-10', '2019-12-31', false],

        ['month', '2020-02-10', '2020-02-29', true],
        ['month', '2020-02-10', '2020-03-29', false],

        ['day', '2020-01-10', '2020-01-10', true],
        ['day', '2020-01-10', '2020-01-11', false],

        ['hour', '2020-01-10', '2020-01-10', true],

        ['minute', '2020-01-10', '2020-01-10', true],

        ['second', '2020-01-10', '2020-01-10', true],

        [null, '2020-01-10', '2020-01-10', true],
        [null, '2020-01-10', '2020-01-01', false]
    ])('(%s) %p isSame %p is %p', (type, compare, input, expected) => {
        expect(isSame(compare, type)(input)).toBe(expected);
    });

});

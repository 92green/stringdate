// @flow
import startOf from '../startOf';

describe('startOf', () => {

    test.each([
        ['year', '2020-01-10', '2020-01-01'],

        ['month', '2020-02-10', '2020-02-01'],

        ['day', '2020-01-10', '2020-01-10'],

        ['hour', '2020-01-10', '2020-01-10'],

        ['minute', '2020-01-10', '2020-01-10'],

        ['second', '2020-01-10', '2020-01-10']
    ])('startOf(%p)(%p)', (type, input, expected) => {
        expect(startOf(type)(input)).toBe(expected);
    });

});

// @flow
import startOf from '../startOf';

describe('startOf', () => {

    test.each([
        ['year', '2020-01-10T22:41:20.000Z', '2020-01-01T00:00:00.000Z'],
        ['year', '2020-01-10', '2020-01-01'],

        ['month', '2020-02-10T22:41:20.000Z', '2020-02-01T00:00:00.000Z'],
        ['month', '2020-02-10', '2020-02-01'],

        ['day', '2020-01-10T22:41:20.000Z', '2020-01-10T00:00:00.000Z'],
        ['day', '2020-01-10', '2020-01-10'],

        ['hour', '2020-01-10T22:41:20.000Z', '2020-01-10T22:00:00.000Z'],
        ['hour', '2020-01-10', '2020-01-10'],

        ['minute', '2020-01-10T22:41:20.000Z', '2020-01-10T22:41:00.000Z'],
        ['minute', '2020-01-10', '2020-01-10'],

        ['second', '2020-01-10T22:41:20.111Z', '2020-01-10T22:41:20.000Z'],
        ['second', '2020-01-10', '2020-01-10']
    ])('startOf(%p)(%p)', (type, input, expected) => {
        expect(startOf(type)(input)).toBe(expected);
    });

});

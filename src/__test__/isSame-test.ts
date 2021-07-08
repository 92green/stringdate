import isSame from '../isSame';
import {DatePart} from '../core/date';

describe('isSame', () => {
    test.each<[DatePart, string, string, boolean]>([
        ['year', '2020-01-10', '2020-12-31', true],
        ['year', '2020-01-10', '2019-12-31', false],
        ['month', '2020-02-10', '2020-02-29', true],
        ['month', '2020-02-10', '2020-03-29', false],
        ['month', '2000-03-10', '2020-03-29', false],
        ['day', '2020-01-10', '2020-01-10', true],
        ['day', '2020-01-10', '2020-01-11', false],
        ['day', '2020-02-11', '2020-01-11', false]
    ])('(%s) %p isSame %p is %p', (type, compare, input, expected) => {
        expect(isSame(type, compare)(input)).toBe(expected);
    });
});

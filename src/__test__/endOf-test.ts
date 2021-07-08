import endOf from '../endOf';
import {DatePart} from '../core/date';

describe('endOf', () => {
    test.each<[DatePart, string, string]>([
        ['year', '2020-01-10', '2020-12-31'],
        ['month', '2020-02-10', '2020-02-29']
    ])('endOf(%p)(%p)', (type, input, expected) => {
        expect(endOf(type)(input)).toBe(expected);
    });
});

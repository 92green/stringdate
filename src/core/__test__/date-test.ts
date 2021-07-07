import {parseDate, stringifyDate} from '../date';

describe('date', () => {
    it('can parse date strings', () => {
        const dateString = '2020-01-01';
        expect(parseDate(dateString).getTime()).toBe(new Date(dateString).getTime());
    });

    it('can stringify dates', () => {
        const dateString = '2020-01-01';
        expect(stringifyDate(new Date(dateString))).toBe(dateString);
    });
});

import format from '../src/format';

describe('format', () => {
    test.each([
        // year
        ['yyyy|MM|dd', '2020-01-01', '2020|01|01'],
        ['EEEE MMMM do yyyy', '2020-01-01', 'Wednesday January 1st 2020']
    ])('format(%p)(%p) === %p', (bb, aa, expected) => {
        expect(format(bb)(aa)).toBe(expected);
    });
});

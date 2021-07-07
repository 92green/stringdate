import endOf from '../endOf';

describe('endOf', () => {
    test.each([
        ['year', '2020-01-10', '2020-12-31'],
        ['month', '2020-02-10', '2020-02-29']
    ])('endOf(%p)(%p)', (type, input, expected) => {
        expect(endOf(type)(input)).toBe(expected);
    });
});

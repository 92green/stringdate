// @flow
import difference from '../difference';
import add from '../add';

describe('difference', () => {

    test.each([
        // positive
        ['2020-01-01', '2023-01-01', 'P1096D'],
        ['2020-01-01', '2020-01-02', 'P1D'],

        // negative
        ['2020-01-01', '2019-01-02', 'P-364D']

    ])('difference(%p)(%p) === %p', (bb, aa, expected) => {
        const diff = difference(bb)(aa);
        expect(diff).toBe(expected);
        expect(add(diff)(bb)).toBe(aa);
    });

});

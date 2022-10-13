import subtract from '../src/subtract';

describe('subtract', () => {
    it('can subtract a duration to a date', () => {
        expect(subtract('P2D')('2012-01-01')).toBe('2011-12-30');
        expect(subtract('P1W')('2012-01-01')).toBe('2011-12-25');
        expect(subtract('P1Y2M3D')('2012-01-01')).toBe('2010-10-29');
        expect(subtract('P13M')('2022-07-31')).toBe('2021-06-30');
        expect(subtract('P2M')('2022-08-31')).toBe('2022-06-30');
    });

    it('can subtract a duration to a duration', () => {
        expect(subtract('P2D')('P3D')).toBe('P1D');
        expect(subtract('P3D')('P1Y2M3D')).toBe('P1Y2M');
    });
});

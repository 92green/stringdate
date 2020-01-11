// @flow
import subtract from '../subtract';

describe('subtract', () => {

    it('can subtract a duration to a date', () => {
        expect(subtract('P2D')('2012-01-01')).toBe('2011-12-30');
        expect(subtract('P2D')('2012-01-01T00:00:00Z')).toBe('2011-12-30T00:00:00.000Z');
        expect(subtract('P2D')('2012-01-01T00:00:00+1100')).toBe('2011-12-30T00:00:00.000+1100');
        expect(subtract('P1W')('2012-01-01')).toBe('2011-12-25');
        expect(subtract('PT1H1M')('2012-01-01T00:00:00')).toBe('2011-12-31T11:59:00.000Z');
        expect(subtract('P1Y2M3D')('2012-01-01')).toBe('2010-10-29');
    });

    it('can subtract a duration to a duration', () => {
        expect(subtract('P2D')('P3D')).toBe('P1D');
        expect(subtract('P3D')('P1Y2M3DT1M')).toBe('P1Y2MT1M');
    });
});

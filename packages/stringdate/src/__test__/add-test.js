// @flow
import add from '../add';

describe('add', () => {

    it('can add a duration to a date', () => {
        expect(add('P2D')('2012-01-01')).toBe('2012-01-03');
        expect(add('P1W')('2012-01-01')).toBe('2012-01-08');
        expect(add('PT1H1M')('2012-01-01T00:00:00Z')).toBe('2012-01-01T01:01:00.000Z');
        expect(add('P1Y2M3D')('2012-01-01')).toBe('2013-03-04');
    });

    it('can add a duration to a duration', () => {
        expect(add('P2D')('P3D')).toBe('P5D');
        expect(add('P1Y2M3DT1M')('P3D')).toBe('P1Y2M6DT1M');
    });
});

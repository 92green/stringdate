import Duration, {
    parseDuration,
    stringifyDuration,
    addDuration,
    subtractDuration,
    isDuration,
    normalizeDurationToSeconds,
    millisecondsToDuration
} from '../../src/core/duration';

const oneTwoThree = new Duration(1, 2, 3);

describe('duration', () => {
    it('can parse durations', () => {
        const duration = parseDuration('P1Y1M4D');
        expect(isDuration(duration)).toBe(true);
        expect(duration.years).toBe(1);
        expect(duration.months).toBe(1);
        expect(duration.days).toBe(4);
    });

    it('will turn weeks to days', () => {
        const duration = parseDuration('P4W');
        expect(duration.days).toBe(28);
    });

    it('can stringify durations', () => {
        expect(stringifyDuration(oneTwoThree)).toBe('P1Y2M3D');
        expect(stringifyDuration(new Duration(0, 0, 1))).toBe('P1D');
        expect(stringifyDuration(new Duration(0, 1))).toBe('P1M');
        expect(stringifyDuration(new Duration(1))).toBe('P1Y');
        expect(stringifyDuration(new Duration())).toBe('P');
    });

    it('can add durations', () => {
        expect(addDuration(oneTwoThree, oneTwoThree)).toEqual(new Duration(2, 4, 6));
    });

    it('can subtract durations', () => {
        expect(subtractDuration(oneTwoThree, oneTwoThree)).toEqual(new Duration(0, 0, 0));
    });

    it('can check if something is a duration', () => {
        expect(isDuration(oneTwoThree)).toBe(true);
        expect(isDuration(new Date())).toBe(false);
    });

    it('can normalize a duration to seconds', () => {
        const day = 60 * 60 * 24;
        expect(normalizeDurationToSeconds(oneTwoThree)).toBe(day * 365.25 + day * 60 + day * 3);
        expect(normalizeDurationToSeconds(new Duration(1))).toBe(day * 365.25);
        expect(normalizeDurationToSeconds(new Duration(0, 1))).toBe(day * 30);
        expect(normalizeDurationToSeconds(new Duration(0, 0, 1))).toBe(day);
    });

    it('can convert milliseconds to a duration', () => {
        expect(millisecondsToDuration(1000 * 60 * 60 * 24)).toEqual(new Duration(0, 0, 1));
    });
});

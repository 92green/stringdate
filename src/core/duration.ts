const numbers = '-?\\d+(?:[\\.,]\\d+)?';
const weekPattern = `(${numbers}W)`;
const datePattern = `(${numbers}Y)?(${numbers}M)?(${numbers}D)?`;
const iso8601 = `P(?:${weekPattern}|${datePattern})`;
const pattern = new RegExp(iso8601);

export default class Duration {
    years: number;
    months: number;
    days: number;
    weeks?: number;
    constructor(years = 0, months = 0, days = 0) {
        this.years = years;
        this.months = months;
        this.days = days;
    }
}

export const durationKeys = ['years', 'months', 'days'] as const;
const durationKeysWeeks = ['weeks', ...durationKeys] as const;

export function parseDuration(durationString: string): Duration {
    const match = durationString.match(pattern);
    if (!match) throw new Error('duration string was unable to be parsed');
    const duration = match.slice(1).reduce((prev, next, idx) => {
        prev[durationKeysWeeks[idx]] = parseFloat(next) || 0;
        return prev;
    }, new Duration());

    // ignore weeks as a duration
    duration.days = duration.days + (duration.weeks || 0) * 7;
    delete duration.weeks;
    return duration;
}

export function stringifyDuration(duration: Duration): string {
    const {years, months, days} = duration;
    let formatString = 'P';

    if (years) formatString += years + 'Y';
    if (months) formatString += months + 'M';
    if (days) formatString += days + 'D';

    return formatString;
}

export function isDuration(input: unknown): boolean {
    return input instanceof Duration;
}

export function addDuration(aa: Duration, bb: Duration) {
    return durationKeys.reduce((rr, key) => {
        rr[key] = aa[key] + bb[key];
        return rr;
    }, new Duration());
}

export function subtractDuration(aa: Duration, bb: Duration) {
    return durationKeys.reduce((rr, key) => {
        rr[key] = Math.max(0, aa[key] - bb[key]);
        return rr;
    }, new Duration());
}

// Warning this is not a real number. It assumes 30 days in a month
// P31D > P1M
// It's just used to compare relative duration size
export function normalizeDurationToSeconds(aa: Duration) {
    return durationKeys.reduce((rr, key) => {
        const value = aa[key];
        if (key === 'years' && value > 0) return rr + value * 31557600; // 365.25
        if (key === 'months' && value > 0) return rr + value * 2592000; // assume 30 days
        if (key === 'days' && value > 0) return rr + value * 86400;
        return rr;
    }, 0);
}

export function millisecondsToDuration(milliseconds: number) {
    return new Duration(0, 0, milliseconds / 1000 / 60 / 60 / 24);
}

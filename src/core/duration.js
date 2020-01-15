// @flow
const numbers = '-?\\d+(?:[\\.,]\\d+)?';
const weekPattern = `(${numbers}W)`;
const datePattern = `(${numbers}Y)?(${numbers}M)?(${numbers}D)?`;
const iso8601 = `P(?:${weekPattern}|${datePattern})`;
const pattern = new RegExp(iso8601);

export type Duration = {
    _type: 'duration',
    years: number,
    months: number,
    days: number
};

export const durationKeys = ['years', 'months', 'days'];

export function parseDuration(durationString: string): Duration {
    let duration = durationString
        .match(pattern)
        .slice(1)
        .reduce((prev, next, idx) => {

            prev[['weeks'].concat(durationKeys)[idx]] = parseFloat(next) || 0;
            return prev;
        }, {_type: 'duration'})
    ;


    // ignore weeks as a duration
    duration.days = duration.days + ((duration.weeks || 0) * 7);
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

export function isDuration(input) {
    return input._type === 'duration';
}

export function addDuration(aa: Duration, bb: Duration) {
    return durationKeys.reduce((rr, key) => {
        rr[key] = aa[key] + bb[key];
        return rr;
    }, {_type: 'duration'});
}

export function subtractDuration(aa: Duration, bb: Duration) {
    return durationKeys.reduce((rr, key) => {
        rr[key] = Math.max(0, aa[key] - bb[key]);
        return rr;
    }, {_type: 'duration'});
}

// Warning this is not a real number. It assumes 30 days in a month
// P31D > P1M
// It's just used to compare relative duration size
export function normalizeDurationToSeconds(aa: Duration) {
    return durationKeys.reduce((rr, key) => {
        const value = aa[key];
        if(key === 'years') return rr + value * 31557600; // 365.25
        if(key === 'months') return rr + value * 2678400; // assume 30 days
        if(key === 'days') return rr + value * 86400;
    }, 0);
}

export function millisecondsToDuration(milliseconds: Duration) {
    return {_type: 'duration', days: milliseconds / 1000 / 60 / 60 / 24};
}


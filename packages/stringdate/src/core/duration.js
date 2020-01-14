// @flow
const numbers = '\\d+(?:[\\.,]\\d+)?';
const weekPattern = `(${numbers}W)`;
const datePattern = `(${numbers}Y)?(${numbers}M)?(${numbers}D)?`;
const timePattern = `T(${numbers}H)?(${numbers}M)?(${numbers}S)?`;
const iso8601 = `P(?:${weekPattern}|${datePattern}(?:${timePattern})?)`;
const pattern = new RegExp(iso8601);

export type Duration = {
    _type: 'duration',
    years: number,
    months: number,
    days: number,
    hours: number,
    minutes: number,
    seconds: number
};

export const durationKeys = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];

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
    const {years, months, days, hours, minutes, seconds} = duration;
    let formatString = 'P';

    if (years) formatString += years + 'Y';
    if (months) formatString += months + 'M';
    if (days) formatString += days + 'D';
    if (hours || minutes || seconds) formatString += 'T';
    if (hours) formatString += hours + 'H';
    if (minutes) formatString += minutes + 'M';
    if (seconds) formatString += seconds + 'S';

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
        if(key === 'hours') return rr + value * 3600;
        if(key === 'minutes') return rr + value * 60;
        if(key === 'seconds') return rr + value;
    }, 0);
}

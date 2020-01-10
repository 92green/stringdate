// @flow
const numbers = '\\d+(?:[\\.,]\\d+)?';
const weekPattern = `(${numbers}W)`;
const datePattern = `(${numbers}Y)?(${numbers}M)?(${numbers}D)?`;
const timePattern = `T(${numbers}H)?(${numbers}M)?(${numbers}S)?`;
const iso8601 = `P(?:${weekPattern}|${datePattern}(?:${timePattern})?)`;
const objMap = ['weeks', 'years', 'months', 'days', 'hours', 'minutes', 'seconds'];
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

export function parseDuration(durationString: string): Duration {
    let duration = durationString
        .match(pattern)
        .slice(1)
        .reduce((prev, next, idx) => {
            prev[objMap[idx]] = parseFloat(next) || 0;
            return prev;
        }, {_type: 'duration'})
    ;

    // ignore weeks as a duration
    duration.days = duration.days + ((duration.weeks || 0) * 7)
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
    return objMap.slice(1).reduce((rr, key) => {
        rr[key] = aa[key] + bb[key];
        return rr;
    }, {_type: 'duration'});
}

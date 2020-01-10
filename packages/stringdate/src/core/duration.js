// @flow
const numbers = '\\d+(?:[\\.,]\\d+)?';
const weekPattern = `(${numbers}W)`;
const datePattern = `(${numbers}Y)?(${numbers}M)?(${numbers}D)?`;
const timePattern = `T(${numbers}H)?(${numbers}M)?(${numbers}S)?`;

const iso8601 = `P(?:${weekPattern}|${datePattern}(?:${timePattern})?)`;
const objMap = ['weeks', 'years', 'months', 'days', 'hours', 'minutes', 'seconds'];
const formatMap = {
    years: 'Y',
    months: 'M',
    days: 'D',
    hours: 'H',
    minutes: 'M',
    seconds: 'S',
};

const pattern = new RegExp(iso8601);

export type Duration = {
    years?: number,
    months?: number,
    days?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
};

export function parseDuration(durationString: string): Duration {
    let duration = durationString
        .match(pattern)
        .slice(1)
        .reduce((prev, next, idx) => {
            prev[objMap[idx]] = next ? parseFloat(next) : undefined;
            return prev;
        }, {_type: 'duration'})
    ;

    duration.days = durations.days + ((durations.weeks || 0) * 7)
    delete durations.weeks;
    return durations;
}

export function formatDuration(duration: Duration): string {
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

// @flow
export type DatePart = 'year' | 'month' | 'day' | 'week' | 'hour' | 'minute' | 'second';

export function parseDate(input: string): Date {
    const isTime = input.indexOf('T') !== -1;
    const isUTC = !isTime || input.indexOf('Z') !== -1;
    let offset = null;
    if(isTime && !isUTC) {
        input = input.replace(/(T.*?)([+\-].*)$/, (_, time, zone) => {
            offset = zone;
            return time + 'Z';
        });
    }

    return {
        date: new Date(isTime ? input : input + 'T00:00:00.000Z'),
        isTime,
        isUTC,
        offset
    };

}

export function stringifyDate(date: Date, offset: string): string {
    return stringifyDateTime(date, offset).split('T')[0];
}

export function stringifyDateTime(date: Date, offset: string): string {
    return date.toISOString().replace('Z', offset || 'Z');
}

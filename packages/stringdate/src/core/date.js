// @flow
import invariant from 'invariant';
export type DatePart = 'year' | 'month' | 'day' | 'week' | 'hour' | 'minute' | 'second';

export function parseDate(input: string): Date {
    const isTime = input.indexOf('T') !== -1;
    invariant(!(isTime && input.indexOf('Z') === -1), 'Date must be UTC %s', input);

    return {
        date: new Date(isTime ? input : input + 'T00:00:00.000Z'),
        isTime
    };

}

export function stringifyDate(date: Date): string {
    return stringifyDateTime(date).split('T')[0];
}

export function stringifyDateTime(date: Date): string {
    return date.toISOString();
}

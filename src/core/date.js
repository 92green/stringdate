// @flow
export type DatePart = 'year' | 'month' | 'day' | 'week' | 'hour' | 'minute' | 'second';

const pad = (input) => String(input).padStart(2, '0');

export function parseDate(input: string): Date {
    return new Date(input);
}

export function stringifyDate(date: Date): string {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

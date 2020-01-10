// @flow

export function parseDate(dateString: string): Date {
    return new Date(dateString);
}

export function stringifyDate(date: Date): string {
    return date.toISOString().split('T')[0];
}

export function stringifyDateTime(date: Date): string {
    return date.toISOString();
}

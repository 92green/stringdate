// @flow

export function parseDate(dateString: string): Date {
    return new Date(dateString);
}

export function stringifyDate(date: Date, offset: string): string {
    return stringifyDateTime(date, offset).split('T')[0];
}

export function stringifyDateTime(date: Date, offset: string): string {
    return date.toISOString().replace('Z', offset || 'Z');
    //const tz = date.getTimezoneOffset();
    //const tzMinutes = tz % 60;
    //let timezone = 'Z';

    //if(tz !== 0) {
        //timezone = (tz > 0 ? '-' : '+') + pad(parseInt(Math.abs(tz / 60)))
            //+ (tzMinutes !== 0 ? pad(tzMinutes) : '00');
    //}

    //return pad(date.getFullYear())
        //+ '-' + pad(date.getMonth() + 1)
        //+ '-' + pad(date.getDate())
        //+ 'T' + pad(date.getHours())
        //+ ':' + pad(date.getMinutes())
        //+ ':' + pad(date.getSeconds())
        //+ '.' + pad(date.getMilliseconds(), 3)
        //+ timezone;
}

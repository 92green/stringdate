// @flow
import {parseDate} from './core/date';
import type {DatePart} from './core/date';


export default (compare: string, compareType?: DatePart)  => (value: string) => {
    const cc = parseDate(compare).date;
    const vv = parseDate(value).date;

    switch (compareType) {
        case 'year':
            return cc.getUTCFullYear() === vv.getUTCFullYear();

        case 'month':
            return cc.getUTCMonth() === vv.getUTCMonth();

        case 'day':
            return cc.getUTCDay() === vv.getUTCDay();

        case 'hour':
            return cc.getUTCHours() === vv.getUTCHours();

        case 'minute':
            return cc.getUTCMinutes() === vv.getUTCMinutes();

        case 'second':
            return cc.getUTCSeconds() === vv.getUTCSeconds();

        default:
            return cc.getTime() === vv.getTime();
    }
};

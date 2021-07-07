import {parseDate} from './core/date';
import {DatePart} from './core/date';

export default (compare: string, compareType?: DatePart) => (value: string) => {
    const cc = parseDate(compare);
    const vv = parseDate(value);

    switch (compareType) {
        case 'year':
            return cc.getFullYear() === vv.getFullYear();

        case 'month':
            return cc.getMonth() === vv.getMonth();

        case 'day':
            return cc.getDay() === vv.getDay();

        case 'hour':
            return cc.getHours() === vv.getHours();

        case 'minute':
            return cc.getMinutes() === vv.getMinutes();

        case 'second':
            return cc.getSeconds() === vv.getSeconds();

        default:
            return cc.getTime() === vv.getTime();
    }
};

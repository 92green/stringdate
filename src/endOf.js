// @flow
import wrap from './core/wrap';

export default (type: string)  => wrap((date: Date) => {
    switch (type) {
        case 'year':
            date.setMonth(11, 31);
            date.setHours(23, 59, 59, 999);
            return date;

        case 'month':
            date.setMonth(date.getMonth() + 1, 0); // next month - 1 day
            date.setHours(23, 59, 59, 999);
            return date;

        case 'day':
            date.setHours(23, 59, 59, 999);
            return date;

        case 'hour':
            date.setMinutes(59, 59, 999);
            return date;

        case 'minute':
            date.setSeconds(59, 999);
            return date;

        case 'second':
            date.setMilliseconds(999);
            return date;

        default:
            return date;
    }
});

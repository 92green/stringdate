// @flow
import wrap from './core/wrap';

export default (type: string)  => wrap((date: Date) => {
    switch (type) {
        case 'year':
            date.setUTCMonth(11, 31);
            date.setUTCHours(23, 59, 59, 999);
            return date;

        case 'month':
            date.setUTCMonth(date.getUTCMonth() + 1, 0); // next month - 1 day
            date.setUTCHours(23, 59, 59, 999);
            return date;

        case 'day':
            date.setUTCHours(23, 59, 59, 999);
            return date;

        case 'hour':
            date.setUTCMinutes(59, 59, 999);
            return date;

        case 'minute':
            date.setUTCSeconds(59, 999);
            return date;

        case 'second':
            date.setUTCMilliseconds(999);
            return date;

        default:
            return date;
    }
});

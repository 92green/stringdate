// @flow
import wrap from './core/wrap';

export default (type: string)  => wrap((date: Date) => {
    switch (type) {
        case 'year':
            date.setMonth(0, 1);
            date.setHours(0, 0, 0, 0);
            return date;

        case 'month':
            date.setDate(1);
            date.setHours(0, 0, 0, 0);
            return date;

        case 'day':
            date.setHours(0, 0, 0, 0);
            return date;

        case 'hour':
            date.setMinutes(0, 0, 0);
            return date;

        case 'minute':
            date.setSeconds(0, 0);
            return date;

        case 'second':
            date.setMilliseconds(0);
            return date;

        default:
            return date;
    }
});

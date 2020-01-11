// @flow
import wrap from './core/wrap';

export default (type: string)  => wrap((date: Date) => {
    switch (type) {
        case 'year':
            date.setUTCMonth(0, 1);
            date.setUTCHours(0, 0, 0, 0);
            return date;

        case 'month':
            date.setUTCDate(1);
            date.setUTCHours(0, 0, 0, 0);
            return date;

        case 'day':
            date.setUTCHours(0, 0, 0, 0);
            return date;

        case 'hour':
            date.setUTCMinutes(0, 0, 0);
            return date;

        case 'minute':
            date.setUTCSeconds(0, 0);
            return date;

        case 'second':
            date.setUTCMilliseconds(0);
            return date;

        default:
            return date;
    }
});

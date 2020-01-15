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

    }
});

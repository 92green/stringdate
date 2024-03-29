import wrap from './core/wrap';
import {DatePart} from './core/date';

export default (type: DatePart) =>
    wrap((date: Date) => {
        switch (type) {
            case 'year':
                date.setMonth(0, 1);
                date.setHours(0, 0, 0, 0);
                return date;

            default:
            case 'month':
                date.setDate(1);
                date.setHours(0, 0, 0, 0);
                return date;
        }
    });

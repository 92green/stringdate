import wrap from './core/wrap';
import {DatePart} from './core/date';

export default (type: DatePart) =>
    wrap((date: Date) => {
        switch (type) {
            case 'year':
                date.setMonth(11, 31);
                date.setHours(23, 59, 59, 999);
                return date;

            default:
            case 'month':
                date.setMonth(date.getMonth() + 1, 0); // next month - 1 day
                date.setHours(23, 59, 59, 999);
                return date;
        }
    });

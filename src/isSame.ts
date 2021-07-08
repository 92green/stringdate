import {parseDate} from './core/date';
import {DatePart} from './core/date';

export default (compareType: DatePart, compare: string) => (value: string) => {
    const cc = parseDate(compare);
    const vv = parseDate(value);
    const isSameYear = cc.getFullYear() === vv.getFullYear();
    if (compareType === 'year') return isSameYear;
    const isSameMonth = isSameYear && cc.getMonth() === vv.getMonth();
    if (compareType === 'month') return isSameMonth;
    return isSameMonth && cc.getDay() === vv.getDay();
};

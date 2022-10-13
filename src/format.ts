import {parseDate} from './core/date';
import {default as format} from 'date-fns/format';

export default (formatString: string) => (value: Date | string) => {
    return format(parseDate(value), formatString);
};

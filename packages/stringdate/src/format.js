// @flow
import {parseDate} from './core/date';
import format from 'date-fns/format';

export default (formatString: Duration) => (value: Date) => {
    return format(parseDate(value), formatString);
};

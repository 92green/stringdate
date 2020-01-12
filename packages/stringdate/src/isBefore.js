// @flow
import wrap from './core/wrap';
import {parseDate} from './core/date';


export default (compare: string)  => (value: string) => {
    return parseDate(value).date < parseDate(compare).date;
};

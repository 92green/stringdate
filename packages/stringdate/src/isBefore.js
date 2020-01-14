// @flow
import {parseDate} from './core/date';

export default (compare: string)  => (value: string) => {
    return parseDate(value) < parseDate(compare);
};

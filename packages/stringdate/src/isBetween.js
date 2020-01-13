// @flow
import {parseDate} from './core/date';

export default (start: string, end: string)  => (value: string) => {
    const ss = parseDate(start).date;
    const ee = parseDate(end).date;
    const vv = parseDate(value).date;

    return vv >= ss && vv <= ee;
};

// @flow
import wrap from './core/wrap';
import {parseDate} from './core/date';
import {millisecondsToDuration} from './core/duration';

export default (compare: string)  => wrap((value: Date) => {
    const cc = parseDate(compare).getTime();
    const vv = value.getTime();
    return millisecondsToDuration(vv - cc);
});


// @flow
import wrap from './core/wrap';
import {parseDate} from './core/date';
import {isDuration, normalizeDurationToSeconds, parseDuration} from './core/duration';

export default (compare: string)  => wrap((value: Date) => {
    if(isDuration(value)) {
        const compareDuration = parseDuration(compare);
        return normalizeDurationToSeconds(compareDuration) > normalizeDurationToSeconds(value)
            ? compareDuration
            : value;
    }
    return new Date(Math.max(value, parseDate(compare)));
});

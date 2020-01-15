// @flow
import wrap from './core/wrap';
import {parseDate} from './core/date';
import {normalizeDurationToSeconds, parseDuration} from './core/duration';

export default (compare: string)  => wrap((value: Date) => {
    if(value._type === 'duration') {
        const compareDuration = parseDuration(compare);
        return normalizeDurationToSeconds(compareDuration) > normalizeDurationToSeconds(value)
            ? compareDuration
            : value
    }
    return new Date(Math.max(value, parseDate(compare)));
});

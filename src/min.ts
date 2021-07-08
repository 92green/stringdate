import wrap from './core/wrap';
import {parseDate} from './core/date';
import Duration, {normalizeDurationToSeconds, parseDuration} from './core/duration';

export default (compare: string) =>
    wrap((value: Date | Duration) => {
        if (value instanceof Duration) {
            const compareDuration = parseDuration(compare);
            return normalizeDurationToSeconds(compareDuration) < normalizeDurationToSeconds(value)
                ? compareDuration
                : value;
        }
        return new Date(Math.min(Number(value), Number(parseDate(compare))));
    });

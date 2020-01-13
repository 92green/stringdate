// @flow
import {parseDuration, stringifyDuration} from './duration';
import {parseDate, stringifyDate, stringifyDateTime} from './date';

export default function wrapFunction<A>(fn: A) {
    return (input: string): string => {
        const isDuration = input.indexOf('P') !== -1;
        let flags;
        let nextValue;

        if(isDuration) {
            flags = {isDuration};
            nextValue = fn(parseDuration(input), flags);
        } else {
            const parsed = parseDate(input);
            flags = {isDuration, ...parsed};
            nextValue = fn(parsed.date, flags);
        }


        // convert durations to string
        if(nextValue._type === 'duration') {
            return stringifyDuration(nextValue);
        }

        // convert dates to string based on exisiting input
        return flags.isTime
            ? stringifyDateTime(nextValue)
            : stringifyDate(nextValue)
        ;
    };
}


// @flow
import {parseDuration, stringifyDuration} from './duration';
import {parseDate, stringifyDate, stringifyDateTime} from './date';

export default function wrapFunction<A>(fn: A) {
    return (input: string): string => {
        const isDuration = input.indexOf('P') !== -1;
        const {date, ...flags} = parseDate(input);

        // compute the next value
        let nextValue = fn(
            isDuration ? parseDuration(input) : date,
            {isDuration, ...flags}
        );

        // convert durations to string
        if(nextValue._type === 'duration') {
            return stringifyDuration(nextValue);
        }

        // convert dates to string based on exisiting input
        return flags.isTime
            ? stringifyDateTime(nextValue, flags.offset)
            : stringifyDate(nextValue, flags.offset)
        ;
    };
}


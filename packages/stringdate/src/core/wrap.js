// @flow
import {parseDuration, stringifyDuration} from './duration';
import {parseDate, stringifyDate, stringifyDateTime} from './date';

export default function wrapFunction<A>(fn: A) {
    return (input: string): string => {
        // flags
        const isDuration = input.indexOf('P') !== -1;
        const isTime = input.indexOf('T') !== -1;

        // compute the next value
        let nextValue = fn(
            isDuration ? parseDuration(input) : parseDate(input),
            {isDuration, isTime}
        );

        // convert durations to string
        if(nextValue._type === 'duration') {
            return stringifyDuration(nextValue);
        }

        // convert dates to string based on exisiting input
        return isTime
            ? stringifyDateTime(nextValue)
            : stringifyDate(nextValue)
        ;
    };
}


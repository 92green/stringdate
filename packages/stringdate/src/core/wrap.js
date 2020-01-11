// @flow
import {parseDuration, stringifyDuration} from './duration';
import {parseDate, stringifyDate, stringifyDateTime} from './date';

export default function wrapFunction<A>(fn: A) {
    return (input: string): string => {
        // flags
        const isDuration = input.indexOf('P') !== -1;
        const isTime = input.indexOf('T') !== -1;
        const isUTC = !isTime || input.indexOf('Z') !== -1;
        let offset = null;
        if(isTime && !isUTC) {
            input = input.replace(/(T.*?)([+\-].*)$/, (_, time, zone) => {
                offset = zone;
                return time + 'Z';
            });
        }

        // compute the next value
        let nextValue = fn(
            isDuration ? parseDuration(input) : parseDate(isTime ? input : input + 'T00:00:00.000Z'),
            {isDuration, isTime, isUTC}
        );

        // convert durations to string
        if(nextValue._type === 'duration') {
            return stringifyDuration(nextValue);
        }

        // convert dates to string based on exisiting input
        return isTime
            ? stringifyDateTime(nextValue, offset)
            : stringifyDate(nextValue, offset)
        ;
    };
}


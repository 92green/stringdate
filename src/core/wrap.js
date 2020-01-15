// @flow
import {parseDuration, stringifyDuration} from './duration';
import {parseDate, stringifyDate} from './date';

export default function wrapFunction<A>(fn: A) {
    return (input: string): string => {
        const isDuration = input.indexOf('P') !== -1;
        const nextValue = fn(
            isDuration ? parseDuration(input) : parseDate(input),
            {isDuration}
        );

        return nextValue._type === 'duration'
            ? stringifyDuration(nextValue)
            : stringifyDate(nextValue);
    };
}


// @flow
import {isDuration as isDurationType, parseDuration, stringifyDuration} from './duration';
import {parseDate, stringifyDate} from './date';

export default function wrapFunction<A>(fn: A) {
    return (input: string): string => {
        const isDuration = input.indexOf('P') !== -1;
        const nextValue = fn(
            isDuration ? parseDuration(input) : parseDate(input),
            {isDuration}
        );

        return isDurationType(nextValue)
            ? stringifyDuration(nextValue)
            : stringifyDate(nextValue);
    };
}


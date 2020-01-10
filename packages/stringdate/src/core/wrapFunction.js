// @flow
import parseISO from 'date-fns/parseISO';
import {parseDuration, formatDuration} from './duration';

export default function wrapFunction<A>(fn: A) {
    return (input: string): string => {
        // flags
        const isDuration = input.indexOf('P') !== -1;
        const isTime = input.indexOf('T') !== -1;

        // compute the next value
        let nextValue = fn(
            isDuration ? parseDuration(input) : parseISO(input),
            {isDuration, isTime}
        );

        // convert durations to string
        if(nextValue._type === 'duration') {
            return formatDuration(nextValue);
        }

        // convert dates to string based on exisiting input
        return isTime
            ? nextValue.toISOString()
            : nextValue.toISOString().split('T')[0]
        ;
    };
}


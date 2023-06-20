import {parseDate} from './core/date';

export default (start: string, end: string) => (value: string) => {
    const ss = parseDate(start);
    const ee = parseDate(end);
    const vv = parseDate(value);

    return vv >= ss && vv < ee;
};

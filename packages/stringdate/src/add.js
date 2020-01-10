// @flow
import wrap from './core/wrap';
import {parseDuration, addDuration} from './core/duration';
import add from 'date-fns/add';


export default (params: Duration)  => wrap((value: Date|Duration, {isDuration}) => {
    return (isDuration ? addDuration : add)(
        value,
        parseDuration(params)
    );
});

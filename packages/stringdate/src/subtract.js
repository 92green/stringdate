// @flow
import wrap from './core/wrap';
import {parseDuration, subtractDuration} from './core/duration';
import sub from 'date-fns/sub';


export default (params: Duration)  => wrap((value: Date|Duration, {isDuration}) => {
    return (isDuration ? subtractDuration : sub)(
        value,
        parseDuration(params)
    );
});

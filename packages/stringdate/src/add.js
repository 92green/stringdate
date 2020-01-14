// @flow
import wrap from './core/wrap';
import {durationKeys, parseDuration, addDuration} from './core/duration';


export default (params: Duration)  => wrap((value: Date|Duration, {isDuration}) => {
    const duration = parseDuration(params);
    if(isDuration) {
        return addDuration(value, duration);
    }

    durationKeys.forEach(key => {
        const amount = duration[key];
        if(amount === 0) return;

        switch (key) {
            case 'years':
                value.setFullYear(value.getFullYear() + amount);
                break;

            case 'months':
                value.setMonth(value.getMonth() + amount);
                break;

            case 'days':
                value.setDate(value.getDate() + amount);
                break;

            case 'hours':
                value.setHours(value.getHours() + amount);
                break;

            case 'minutes':
                value.setMinutes(value.getMinutes() + amount);
                break;

            case 'seconds':
                value.setSeconds(value.getSeconds() + amount);
                break;
        }
    });

    return value;

});

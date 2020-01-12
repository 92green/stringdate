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
                value.setUTCFullYear(value.getUTCFullYear() + amount);
                break;

            case 'months':
                value.setUTCMonth(value.getUTCMonth() + amount);
                break;

            case 'days':
                value.setUTCDate(value.getUTCDate() + amount);
                break;

            case 'hours':
                value.setUTCHours(value.getUTCHours() + amount);
                break;

            case 'minutes':
                value.setUTCMinutes(value.getUTCMinutes() + amount);
                break;

            case 'seconds':
                value.setUTCSeconds(value.getUTCSeconds() + amount);
                break;
        }
    });

    return value;

});

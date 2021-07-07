import wrap from './core/wrap';
import {durationKeys, parseDuration, addDuration} from './core/duration';

export default (params: string) =>
    wrap((value: Date | string, {isDuration}) => {
        const duration = parseDuration(params);
        if (isDuration) {
            return addDuration(value, duration);
        }

        durationKeys.forEach((key) => {
            const amount = duration[key];
            if (amount === 0) return;

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
            }
        });

        return value;
    });

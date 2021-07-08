import wrap from './core/wrap';
import Duration, {durationKeys, parseDuration, subtractDuration} from './core/duration';

export default (params: string) =>
    wrap((value: Date | Duration) => {
        const duration = parseDuration(params);
        if (value instanceof Duration) return subtractDuration(value, duration);

        durationKeys.forEach((key) => {
            const amount = duration[key];
            if (amount === 0) return;

            switch (key) {
                case 'years':
                    value.setFullYear(value.getFullYear() - amount);
                    break;

                case 'months':
                    value.setMonth(value.getMonth() - amount);
                    break;

                case 'days':
                    value.setDate(value.getDate() - amount);
                    break;
            }
        });

        return value;
    });

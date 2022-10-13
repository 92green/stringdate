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
                    const desiredMonth = value.getMonth() - amount;
                    // dates are 1 indexed so month + 1 and 0 date is the last of month
                    const endOfMonth = new Date(value.getFullYear(), desiredMonth + 1, 0);
                    value.setMonth(desiredMonth, Math.min(endOfMonth.getDate(), value.getDate()));
                    break;

                case 'days':
                    value.setDate(value.getDate() - amount);
                    break;
            }
        });

        return value;
    });

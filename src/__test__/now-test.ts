import now from '../now';
import {stringifyDate} from '../core/date';

describe('now', () => {
    it('returns today', () => {
        expect(now()).toBe(stringifyDate(new Date()));
    });
});

import now from '../src/now';
import {stringifyDate} from '../src/core/date';

describe('now', () => {
    it('returns today', () => {
        expect(now()).toBe(stringifyDate(new Date()));
    });
});

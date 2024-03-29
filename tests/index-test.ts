import * as stringdate from '../src/index';

describe('index', () => {
    test.each<[keyof typeof stringdate]>([
        ['add'],
        ['difference'],
        ['endOf'],
        ['format'],
        ['isAfter'],
        ['isBefore'],
        ['isBetween'],
        ['isSame'],
        ['max'],
        ['min'],
        ['now'],
        ['startOf'],
        ['subtract']
    ])("import {%s} from 'stringdate'", (name) => {
        expect(typeof stringdate[name]).toBe('function');
    });
});

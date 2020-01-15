// @flow
import * as stringdate from '../index';

describe('index', () => {

    test.each([
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

// @flow
import add from '../add';

describe('add', () => {

    test.each([
        // year
        ['P3Y', '2020-01-01', '2023-01-01'],

        // month
        ['P3M', '2020-01-01', '2020-04-01'],

        // day
        ['P3D', '2020-01-01', '2020-01-04'],

        // hour
        ['P3H', '2020-01-01', '2020-01-01'],

        // minute
        ['PT3M', '2020-01-01', '2020-01-01'],

        // second
        ['PT3S', '2020-01-01', '2020-01-01'],

        // week
        ['P3W', '2020-01-01', '2020-01-22'],

        // combo
        ['P1Y1M1D', '2020-01-01', '2021-02-02'],

        // durations
        ['P1Y', 'P2Y', 'P3Y'],
        ['P1M', 'P2M', 'P3M'],
        ['P1D', 'P2D', 'P3D'],
        ['PT1H', 'PT2H', 'PT3H'],
        ['PT1M', 'PT2M', 'PT3M'],
        ['PT1S', 'PT2S', 'PT3S'],
        ['P1Y2M3DT1H1M2S', 'P1Y2M3DT1H1M2S', 'P2Y4M6DT2H2M4S']
    ])('add(%p)(%p) === %p', (params, input, expected) => {
        expect(add(params)(input)).toBe(expected);
    });

});

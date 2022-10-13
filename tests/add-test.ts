import add from '../src/add';

describe('add', () => {
    test.each([
        // year
        ['P3Y', '2020-01-01', '2023-01-01'], // month
        ['P3M', '2020-01-01', '2020-04-01'], // day
        ['P1M', '2020-03-31', '2020-04-30'], // end of month
        ['P1M2D', '2020-03-31', '2020-05-02'], // end of month combo
        ['P13M', '2020-01-31', '2021-02-28'], // end of month whole year
        ['P3D', '2020-01-01', '2020-01-04'], // week
        ['P3W', '2020-01-01', '2020-01-22'], // combo
        ['P1Y1M1D', '2020-01-01', '2021-02-02'], // durations
        ['P1Y', 'P2Y', 'P3Y'],
        ['P1M', 'P2M', 'P3M'],
        ['P1D', 'P2D', 'P3D'],
        ['P1Y2M3D', 'P1Y2M3D', 'P2Y4M6D']
    ])('add(%p)(%p) === %p', (params, input, expected) => {
        expect(add(params)(input)).toBe(expected);
    });
});

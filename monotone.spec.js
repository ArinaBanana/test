const monotone = require('./monotone');

describe('is monotone', function () {
    test('monotone [1]', function () {
        const arr = [0, 1, 5, 9, 15];
        const expected = true;

        const actual = monotone(arr);

        expect(actual).toBe(expected);
    });
    test('monotone [2]', function () {
        const arr = [0, 1, 1, 5, 9, 9, 15];
        const expected = true;

        const actual = monotone(arr);

        expect(actual).toBe(expected);
    });
    test('monotone [3]', function () {
        const arr = [1, 1, 2, 5, 9, 9, 15];
        const expected = true;

        const actual = monotone(arr);

        expect(actual).toBe(expected);
    });
    test('monotone [4]', function () {
        const arr = [15, 8, 4, 2, 1];
        const expected = true;

        const actual = monotone(arr);

        expect(actual).toBe(expected);
    });
    test('monotone [5]', function () {
        const arr = [15, 15, 8, 4, 2, 1];
        const expected = true;

        const actual = monotone(arr);

        expect(actual).toBe(expected);
    });
    test('not monotone', function () {
        const arr = [0, 1, 5, 15, 4];
        const expected = false;

        const actual = monotone(arr);

        expect(actual).toBe(expected);
    });
});

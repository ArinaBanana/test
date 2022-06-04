const convertDuration = require('./convert-duration');

describe('convert', function () {
    test('convert [1]', function () {
        const seconds = 300;

        const expected = '05m';
        const actual = convertDuration(seconds);

        expect(actual).toBe(expected);
    });
    test('convert [2]', function () {
        const seconds = 600;

        const expected = '10m';
        const actual = convertDuration(seconds);

        expect(actual).toBe(expected);
    });
    test('convert [3]', function () {
        const seconds = 3600;

        const expected = '01h 00m';
        const actual = convertDuration(seconds);

        expect(actual).toBe(expected);
    });
    test('convert [4]', function () {
        const seconds = 3900;

        const expected = '01h 05m';
        const actual = convertDuration(seconds);

        expect(actual).toBe(expected);
    });
    test('convert [5]', function () {
        const seconds = 4200;

        const expected = '01h 10m';
        const actual = convertDuration(seconds);

        expect(actual).toBe(expected);
    });
    test('convert [6]', function () {
        const seconds = 39300;

        const expected = '10h 55m';
        const actual = convertDuration(seconds);

        expect(actual).toBe(expected);
    });
})

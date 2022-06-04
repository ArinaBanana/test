const binary = require('./binary');


describe('binary search', () => {
    test('simple binary search', function () {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
        const myNum = 32;

        const expected = 31;
        const actual = binary(numbers, myNum);

        expect(actual).toBe(expected);
    });
    test('находит первый элемент', () => {
        const numbers = [0, 1, 2, 3];
        const myNum = 0;

        const expected = 0;
        const actual = binary(numbers, myNum);

        expect(actual).toBe(expected);
    });
    test('находит последний элемент', () => {
        const numbers = [0, 1, 2, 3];
        const myNum = 3;

        const expected = 3;
        const actual = binary(numbers, myNum);

        expect(actual).toBe(expected);
    });
    test('находит элемент посередине, число элементов нечетное', () => {
        const numbers = [0, 1, 2, 3, 4];
        const myNum = 2;

        const expected = 2;
        const actual = binary(numbers, myNum);

        expect(actual).toBe(expected);
    });
    test('находит элемент посередине, число элементов четное', () => {
        const numbers = [10, 11, 12, 13];
        const myNum = 11;

        const expected = 1;
        const actual = binary(numbers, myNum);

        expect(actual).toBe(expected);
    });
    test('находит элемент посередине, число элементов четное (2)', () => {
        const numbers = [10, 11, 12, 13];
        const myNum = 12;

        const expected = 2;
        const actual = binary(numbers, myNum);

        expect(actual).toBe(expected);
    });
    test('возвращает null, если элемента нет', () => {
        const numbers = [0, 1, 2, 3, 4, 5];

        const myNum = 22;

        const expected = null;
        const actual = binary(numbers, myNum);

        expect(actual).toBe(expected);
    });
    test('возвращает null, если массив пустой', () => {
        const numbers = [];

        const myNum = 22;

        const expected = null;
        const actual = binary(numbers, myNum);

        expect(actual).toBe(expected);
    });
});


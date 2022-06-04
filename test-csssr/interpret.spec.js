const interpret = require("./interpret");
const defn = require("./defn");
const { sum } = require("./sum");
const { diffNum } = require("./sum");

// первый аргумент: массив из
// 1.ключевое слово определения функции: defn принимает ее название, аргументы и тело
// т.о "строит функцию" ?
// 2.название функции.
// 3.объявление параметров функции
// 4.массив из тела функции, в данном случае sum (здесь мб любая) и ее параметров

// второй аргумент: массив из
// 1.название функций
// 2.объявление аргументов функции

describe("Test func interpret", () => {
    it("1 test - func sum", () => {
        const declaration = [defn, "sum3", ['a', 'b', 'c'], [sum, 'a', 'b', 'c']];
        const voidFunc = ['sum3', 10, 20, 30];

        const actual = interpret(declaration, voidFunc);
        const expected = 60;

        expect(actual).toBe(expected);
    })

    it("2 test - func diff", () => {
        const declaration = [defn, "diff", ['a', 'b'], [diffNum, 'a', 'b']];
        const voidFunc = ['diff', 50, 40];

        const actual = interpret(declaration, voidFunc);
        const expected = 10;

        expect(actual).toBe(expected);
    })

    it("3 test - func diff check order", () => {
        const declaration = [defn, "diff", ['a', 'b'], [diffNum, 'b', 'a']];
        const voidFunc = ['diff', 40, 50];

        const actual = interpret(declaration, voidFunc);
        const expected = 10;

        expect(actual).toBe(expected);
    })

});

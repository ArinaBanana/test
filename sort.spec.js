const sort = require('./sort');

describe('sort', function () {
    test('sort [1] числа по возрастанию', function () {
        const arr = [5, 6, 3, 2, 1, 0, 45];

        const expected = [0, 1, 2, 3, 5, 6, 45];
        const actual = sort(arr);

        expect(actual).toEqual(expected);
    })
});

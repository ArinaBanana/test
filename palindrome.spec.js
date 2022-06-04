const palindrome = require('./palindrome');

describe('palindrome', () => {
    test('is palindrome', function () {
        const str = "Eva, can I see bees in a cave?";

        const expected = true;
        const actual = palindrome(str);

        expect(actual).toBe(expected);
    });
    test('is palindrome (2)', () => {
        const str = "ш4л4ш";

        const expected = true;
        const actual = palindrome(str);

        expect(actual).toBe(expected);
    });
    test('is palindrome (2)', () => {
        const str = "ш4лл4ш";

        const expected = true;
        const actual = palindrome(str);

        expect(actual).toBe(expected);
    });
});

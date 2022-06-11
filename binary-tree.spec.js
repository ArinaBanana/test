const isSameTree = require('./binary-tree');

describe('binary-tree check', () => {
    test('same trees', () => {
        const p = [1, 2, 3];
        const q = [1, 2, 3];

        const actual = isSameTree(p, q);

        expect(actual).toBeTruthy();
    })

    test('not same trees', () => {
        const p = [1, 2];
        const q = [1, null, 2];

        const actual = isSameTree(p, q);

        expect(actual).toBeFalsy();
    })

    test('not same trees', () => {
        const p = [1, 2, 1];
        const q = [1, 1, 2];

        const actual = isSameTree(p, q);

        expect(actual).toBeFalsy();
    })

    test('not same trees', () => {
        const p = [1, 2, 3];
        const q = [1, 2];

        const actual = isSameTree(p, q);

        expect(actual).toBeFalsy();
    })

    test('not same trees', () => {
        const p = [1, 2];
        const q = [1, 2, 3];

        const actual = isSameTree(p, q);

        expect(actual).toBeFalsy();
    })
})

const sort = function (arr) {

    const findSmall = function (arr) {
        let small = arr[0];
        let smallIndex = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < small) {
                small = arr[i];
                smallIndex = i;
            }
        }

        return smallIndex;
    };

    let result = [];

    while (arr.length) {
        let small = findSmall(arr);
        result.push(arr[small]);
        arr.splice(small, 1);
    }

    return result;
};

sort([5, 6, 3, 2, 1, 0, 45]);

module.exports = sort;

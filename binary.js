const binarySearch = function (numbers, myNum) {
    if (numbers.length === 0) {
        return null;
    }

    let left = 0;
    let right = numbers.length - 1;

    while (left <= right) {
        const center = Math.round((right + left)  / 2);

        if (myNum > numbers[center]) {
            left = center + 1;
        } else if (myNum < numbers[center]) {
            right = center - 1;
        } else {
            return center;
        }
    }

    return null;
};

module.exports = binarySearch;


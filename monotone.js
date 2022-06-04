const isMonotone = function (arr) {
    let isUp;
    let startIndex;

    for (startIndex = 0; startIndex < arr.length - 1; startIndex++) {
        if (arr[startIndex] !== arr[startIndex + 1]) {
            isUp = arr[startIndex] < arr[startIndex + 1];
            break;
        }
    }

    for (let i = startIndex + 1; i < arr.length - 1; i++) {

        const num = arr[i];
        const numNext = arr[i + 1];

        if ((num > numNext && isUp) || (num < numNext && !isUp)) {
            return false;
        }
    }

    return true;
};

isMonotone([1, 1, 2, 5, 9, 9, 15]);

module.exports = isMonotone;

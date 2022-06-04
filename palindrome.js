const isPalindrome = function (str) {
    const cleanStr = str.replace(/[^a-zA-ZА-Яа-яёЁ0-9]/g, '');
    // const reversed = clean.split('').reverse().join('');
    // return clean === reversed;

    const center = Math.floor(cleanStr.length / 2);

    for (let i = 0; i <= center; i++) {
        const left = cleanStr[i].toLowerCase();
        const right = cleanStr[cleanStr.length - 1 - i].toLowerCase();

        if (left !== right) {
            return false;
        }
    }

    return true;
};

module.exports = isPalindrome;

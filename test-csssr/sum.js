const sum = (...args) => args.reduce((prev, curr) => prev + curr);

const diffNum = (...args) => args.reduce((prev, curr) => prev - curr);

module.exports = {
    sum,
    diffNum
};

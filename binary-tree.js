const isSameTree = function (p, q) {
    let iterations = p.length > q.length ? p.length : q.length;

    for (let i = 0; i < iterations; i++) {
        if (p[i] !== q[i]) {
            return false;
        }
    }

    return true;
};

module.exports = isSameTree;

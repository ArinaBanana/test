const defn = (name, parameters, body) => {
    return (...values) => {
        const [fn, ...args] = body;
        const params = args.map(arg => values[parameters.indexOf(arg)]);
        return fn(...params);
    }
}

module.exports = defn;

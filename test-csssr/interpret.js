const interpret = (...commands) => {
    const funcs = {};

    const declaration = commands[0];
    const [defn, name, params, body] = declaration;
    funcs[name] = defn(name, params, body);

    const call = commands[commands.length - 1];
    const [functionName, ...functionArgs] = call;

    return funcs[functionName](...functionArgs)
}

module.exports = interpret;

function buildPath(stringParts, dynamicStringParts) {
    return stringParts
        .reduce((key, part, idx) => key + part + (dynamicStringParts[idx] || ''), '')
        .replace(/\[(.*)\]/, '.$1')
        .split('.')
        .slice(1);
}

module.exports = function safeGet() {
    const args = Array.prototype.slice.call(arguments);
    const stringParts = args[0].slice(1);
    const target = args[1];
    const dynamicStringParts = args.slice(2);

    const path = buildPath(stringParts, dynamicStringParts);
    return path.reduce((target, prop) => target && target[prop], target);
};

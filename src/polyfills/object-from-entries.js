if (!Object.fromEntries) {
    Object.fromEntries = function fromEntries(iterable) {
        return Array.prototype.slice.call(iterable).reduce((obj, entry) => {
            obj[entry[0]] = entry[1];
            return obj;
        }, {})
    };
}
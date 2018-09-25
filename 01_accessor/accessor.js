const accessor = obj => {
    return function (key) {
        if (arguments[1]) obj[key] = arguments[1];
        return obj[key];
    }
}
function sometimes(func) {
    let count = 0;

    return function () {
        ++count;
        if (count < 4 || (count % 2) == 1) {
            return func.apply(null, [...arguments]);
        } else return 'I do not know!';

    }
}
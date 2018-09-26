function search(func) {
    let bool = false;

    this.forEach(function (elem) {
        if (func(elem)) bool = true;
        else if (Array.isArray(elem) && !bool) bool = search.call(elem, func);
    });
    return bool;
}
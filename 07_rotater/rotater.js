function rotater(str) {
    return function (num) {
        let splitStr = str.split(), temp;
        for (let count = 0; count < num; count++) {
            if (count >= splitStr.length) {
                temp = splitStr.pop();
                splitStr.unshift(temp);
            } else {
                temp = splitStr.shift();
                splitStr.push(temp);
            }
        }
        return splitStr.join('');
    }
}
const rotater = str => {
    let count = 0;
    return function (num) {
        let splitStr = str.split(), temp;
        while (count < num) {
            if (count >= splitStr.length) {
                temp = splitStr.pop();
                splitStr.unshift(temp);
            } else {
                temp = splitStr.shift();
                splitStr.push(temp);
            }
            count++;
        }
        return splitStr.join('');
    }
}
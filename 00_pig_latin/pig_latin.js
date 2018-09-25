const translate = str => {
    let splitStr = str.split(' '),
        vowels = ['a', 'e', 'i', 'o', 'u'];

    return splitStr.map(word => {
        for (let i = 0; i < vowels.length; i++) {
            if (word[0] == 'q') return word.slice(2) + word.slice(0, 2) + 'ay';
            else if (word[0] == vowels[i]) return word + 'ay';
            else {
                if (word[i + 1] == vowels[i]) return word.slice(i) + word.slice(0, i) + 'ay'
            }
        }
    }).join(' ');
}


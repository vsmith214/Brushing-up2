function difference(arr1, arr2) {
    return arr1.filter(elem => !arr2.includes(elem))
}

const symmetricDiff = (arr1, arr2) => difference(arr1, arr2).concat(difference(arr2, arr1))

console.log(oddOccurrencesInArray(  [9, 3, 9, 3, 9, 7, 9] ));


function oddOccurrencesInArray(array) {
    let i, number;
    for (i = 0; i < array.length; i++) {
        number ^= array[i]
    }
    return number
}

//console.log(tapeEquilibrium(  [3,1,2,4,3] ));
//console.log(tapeEquilibrium(  [1,1] ));
//console.log(tapeEquilibrium(  [-1000,1000] ));
//console.log(missingNumber(  [2,3,1,5] ));
console.log(permutation(  [4, 1, 3, 2] ));
console.log(permutation(  [4, 1, 3] ));
console.log(permutation(  [4, 1, 3, 4] ));
console.log(permutation(  [4] ));


function tapeEquilibrium(a) {
    let i,
        sumFirstPart = 0,
        sumAllArray = 0,
        difference , minDifference = Infinity,
        array = a;
    for (i = 0; i < array.length; i++) {
        sumAllArray += array[i];
    }
    for(i = 0; i< array.length; i++) {
        sumFirstPart += array[i];
        sumSecondPart = sumAllArray - sumFirstPart;

        difference = Math.abs(sumFirstPart - sumSecondPart);
        if (difference < minDifference) {
            minDifference = difference
        }
    }
    return minDifference


}
function missingNumber (array) {
    let i , sumCorrectArray = 0, sumCurrentArray = 0;
            for ( i = 0; i < array.length+1; i++){
                sumCorrectArray += i + 1;
                }
            for (i = 0; i < array.length; i++){
                sumCurrentArray += array[i];
        }
        return sumCorrectArray - sumCurrentArray
    }

/*function solution(A) {
    let i, result,
        j = 1,
        array = A.sort(),
        sumCurrentArray = 0,
        correctArray = [];
    for (i = 0; i < array.length; i++) {
        correctArray[i] = j;
        j++;
    }
    for (i = 0; i < array.length; i++) {
        if (correctArray[i] !== array[i]) {
            return 0
        }


    }
    return 1
}
*/
function permutation(A) {
    let i,value,
        array = A,
        maxValue = 0,
        minValue=Infinity,
        difference,
        correctArray = [];
    for (i = 0; i < array.length; i++) {
        if (maxValue < array[i]) {
            maxValue = array[i];
        }
    }
    for (i = 0; i < array.length; i++) {
        if (minValue > array[i]) {
            minValue = array[i];
        }
    }
        difference = maxValue - minValue;
     if ( minValue  > 1 || ++difference !== array.length){
         return 0
     }
    for (i = 0; i < array.length; i++) {
            value = array[i] - minValue;
            if (typeof correctArray[value] !== 'undefined') {
                return 0
            }
        correctArray[value] = array[i];
    }
    return 1
}
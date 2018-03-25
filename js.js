'use strict';
console.log('helloo');
let town = ['London', 'Minga', 'Vinnitsa', 'new-York'];
let numbers = [];
let words = 'Развёрнутый 2569 комментарий Дэна Абрамова';
let any = "10 little nigger boys went out to dine;\n" +
    "one choked his little self, and then there were 9 \n" +
    "\n" +
    "9 little nigger boys sat up very late;\n" +
    "One overslept himself, and then there were 8 \n" +
    "\n" +
    "8 little nigger boys traveling in Devon;\n" +
    "One said he'd stay there, and then there were 7 \n" +
    "\n" +
    "7 little nigger boys chopping up sticks;\n" +
    "One chopped himself in half, and then there were 6 \n";
let matrix = [
    [1, 2, 3,9],
    [4, 5, 6,9],
    [7, 88, 55,99]
];
console.log(town[4]);
console.log(typeof town);
console.log(myRevers(town));
//let funResult = new Operation(numbers);
//console.log(sortie(a));
//console.log(funResult.sum);
/*console.log(processArray(numbers, multi));
console.log(processArray(numbers, sumeven));
console.log(wordquantity(words, wordfind));

assertTrue("anagana", isAnagram("anagana"));
assertTrue("anna", isAnagram("anna"));
assertTrue("aba", isAnagram("aba"));
assertTrue("a", isAnagram("a"));
assertTrue(" ", isAnagram(" "));
assertTrue("", isAnagram(""));
assertFalse("xy", isAnagram("xy"));
assertFalse("ass", isAnagram("ass"));
assertFalse("anagram", isAnagram("anagram"));
*/
console.log(words);
console.log(reverseWords(words));
console.log(countAnagramInSentence(words));
console.log(wordquantity(words, isAnagram));

let result = reverseWords("abc");
console.log(any);
console.log("cba" !== result);
console.log(toBinary(456));
console.log(countNumbers(words));
console.log(countNumbers(any));
//console.log(sortie(numbers))


/*assertEquals("anna anna", reverseWords("anna anna"));
assertEquals("a", reverseWords("a"));
assertEquals("abc", reverseWords("cba"));
assertEquals("abc xyz", reverseWords("cba zyx"));
assertEquals("ab cd", reverseWords("ba dc"));
assertEquals("abc x", reverseWords("cba x"));*/
/*assertEquals("0", toBinaryV(0))
assertEquals("1", toBinaryV(1))
assertEquals("10", toBinaryV(2))
assertEquals("101", toBinaryV(5))
assertEquals("101000001001", toBinaryV(2569))*/


assertEquals("There are no numbers in this text", countNumbers("There are no numbers in this text"));
assertEquals("there are 1010 types of people: those who understand binaries and those who not", countNumbers("there are 10 types of people: those who understand binaries and those who not"));
assertEquals('1111011',countNumbers("123"));
assertEquals('1111011 111001000',countNumbers("123 456"));
assertEquals('a0',countNumbers("a0"));
assertEquals(2,matrixMaxSumNumber([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));
assertEquals('x1 =-1 x2 =-1.5',quadraticEquation(2,5,3));
assertEquals('x1 =1 x2 =-1.5',quadraticEquation(2,1,-3));
assertEquals('x1 =0.6 x2 =0.5',quadraticEquation(10,-11,3));
assertEquals('x1 =3 x2 =-1',quadraticEquation(1,-2,-3));
assertEquals('x1 =-5 x2 =3',quadraticEquation(-1,-2,15));
assertEquals(-6,quadraticEquation(1,12,36));

console.log(indexOfMax(numbers));
console.log(numbers);
console.log(matrixMaxSumNumber(matrix));

console.log(getMaxSubSum([-1, 2, 3, -9])) ;// = 5 (сумма выделенных)
console.log(getMaxSubSum([2, -1, 2, 3, -9])); //= 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); //= 11
console.log(getMaxSubSum([-2, -1, 1, 2])); //= 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); //= 100
console.log(getMaxSubSum([1, 2, 3])); //= 6 (неотрицательные - берем всех)
console.log(discriminator(9,12,4));
console.log(Math.sqrt(1));
console.log(quadraticEquation(1,-26,120));
console.log(quadraticEquation(2,5,3));
console.log(quadraticEquation(9,12,4));
let val = "2*x^2+5*x+3=0";
console.log(typeof val);


/*--------------------------------------------------------------------------------------------*/
console.log('-----------------------------------------------------------------------');
/*let arr = val.match(/([+-\s]\d+)/g);
let a = arr[0];
let b = arr[1];
let c = arr[2];
console.log(a);
console.log(b);
console.log(c);
console.log(quadraticEquation(a,b,c));
//console.log(quadraticEquationMulti(9,12,4));
quadraticEquationString(val);
quadraticEquationString(val);*/

console.log('-----------------------------------------------------------------------');
console.log('----------------------------UNIT TEST-------------------------------------------');
let val1 = "2*x^2+5*x+3=0";
let val2 = "2*x2+5*x+3=0";
let val3 = " 2 *x^2 +5* x+3 =5";
let val4 = " 2*x^ 2+ 5*x +3=0";
let val5 = "2*x^2 +5*x +3 =0";
let val6 = "1*x^2 -2*x -3 =0";
let val7 = '10*x^2 -11*x +3 =0';
assertEquals('x1 =-1 x2 =-1.5',quadraticEquationString(val1));
assertEquals('The expression does not match the pattern 2*x^2+5*x+3=0',quadraticEquationString(val2));
assertEquals('The expression does not match the pattern 2*x^2+5*x+3=0',quadraticEquationString(val3));
assertEquals('The expression does not match the pattern 2*x^2+5*x+3=0',quadraticEquationString(val4));
assertEquals('x1 =-1 x2 =-1.5',quadraticEquationString(val5));
assertEquals('x1 =3 x2 =-1',quadraticEquationString(val6));
assertEquals('x1 =0.6 x2 =0.5',quadraticEquationString(val7));


console.log('----------------------------UNIT TEST END-------------------------------------------');
console.log(solution(328));
console.log(numbers);
console.log(cyclicRotation([3, 8, 9, 7, 6], 3) );
console.log(cyclicRotation([0, 0, 0], 1)  );
console.log(cyclicRotation([1, 2, 3, 4], 4)  );
console.log(cyclicRotation([], 1)  );


function cyclicRotation (array,N) {
    if (N > 0 && array.length !== N && array.length !== 0 ){
        for (let i = 0; i < N; i++) {
            let lastValue = array.pop();
            array.unshift(lastValue);
            }
        return array
    } else {
        return array
        }
}






function solution(N) {
    let nArr, i, result = 0, count = 0, maxCount = 0;
    N = N.toString(2);
    nArr = N.split('');
    for (i = 0 ; i < nArr.length; i++){
        if (nArr[i] == 0 ){
            count++
            if (count > maxCount && nArr[i+1] !== undefined){
                maxCount = count;
            }
        } else  {
            if (count > result){
                result = count;
            }

            count = 0;
        }

    }

    return result
}

function maxSumZeroBINum (array) {

}



function quadraticEquationString(value) {
    let xquad = value.match(/x\^2/);
    let x = value.match(/x[-+\s]/);
    let zero = value.match(/=\d*/);
    if (xquad !== null && zero[0] == '=0' && x !== null){
        let arr = value.match(/([+-\s]\d+)/g);
        let aArr = value.match(/\d+/);
        let a = aArr[0];
        let b = arr[0];
        let c = arr[1];
        return quadraticEquation(a,b,c)
    } else {
        return'The expression does not match the pattern 2*x^2+5*x+3=0'
    }

}









/*----------------------------------------------------------------------------------------------*/



function quadraticEquation(a,b,c) {
    let x1, x2, x;
    let result = discriminator(a,b,c);

    if(result > 0){
        x1 = (-b + Math.sqrt(result)) / (2*a);
        x2 = (-b -Math.sqrt(result)) / (2*a);
        return 'x1 ='+ x1 +' ' + 'x2 =' + x2;
    } else if (result === 0){
        return x = -b/(2*a);
    } else {
        return 'this equation has no real roots'
    }
    
}
function discriminator(a,b,c) {
    let result = b*b - 4*a*c;
    return result
}

function matrixMaxSumNumber (matrix){
    let i,j,k, result, maxIndex=0;
    for (i = 0; i < matrix.length; i++ ){
           for (j = 0; j < matrix[i].length; j++) {
               let sum = 0;
               for ( k = 0; k < matrix.length; k++) {
                   sum += matrix[k][j];
               }
               if (sum > maxIndex) {
                   maxIndex = sum;
                   result = j
               }
           }
    }
        return result
    }
    
function getMaxSubSum (array) {
    let i,j,
        sum ,
        maxSum = 0;
    for (i = 0; i < array.length; i++){
        sum = 0;
            for (j = i; j < array.length; j++){
                sum +=  array[j];
                if (sum > maxSum) {
                    maxSum = sum
                }
            }
    }
    return maxSum
}

function indexOfMax (array) {
    let maxindex = 0;
        for(let i = 1; i < array.length; i++){
            if (array[i] > array[maxindex]){
                maxindex = i;

            }
        }
    return maxindex
}



function countNumbers(text) {
    let arrText = text.split(' '),
        result = 0;
    for (let i = 0; i < arrText.length; i++) {
            if (!isNaN(arrText[i]) && arrText[i] != "\n") { //fucking js consider \n as number
                 arrText[i] = toBinaryV(arrText[i]);
                result++;
            }
            else {
                //console.log(arrText[i]+ " is not number")
            }
    }
    return text = arrText.join(' ');
}
function toBinaryV(number) {
    let result = ""
    while(number != 0)  {
        result = number % 2 + result;
        number = Math.floor(number / 2);
    }
    if(result == "") {
        result = "0"
    }
    return result
}
function toBinary(number) {
        let lessNum =[],
            num, ost;
        if (number == 0){
            return '0'
        } else {
            while (number > 0) {
                num = number / 2;
                num = num ^ 0;
                ost = number % 2;
                lessNum.unshift(ost);
                number = num;
            }
            return lessNum.join('');
        }
}

function reverseWords(text) {
    let arrText = text.split(' '),
           rest =[],
        reversetext;
        for (let i = 0; i < arrText.length; i++ ){
            reversetext = Array.from(arrText[i]);
            reversetext = myRevers(reversetext).join('');
            rest.push(reversetext);
        }
    return  rest.join(' ') ;
}

function isAnagram(text) {

    for (let i = 0 ; i < text.length / 2; i++ ){
        if (text[i] != text[text.length - ++i]){
            return false;
        }
    }
    return true;
}

function countAnagramInSentence(words) {
    let arText = words.split(' ');
    let sumAnagram = 0;
        for ( let i = 0; i < arText.length; i++){
           if( isAnagram(arText[i])){
               sumAnagram ++;
           }

        }
    return sumAnagram;
}
function myRevers() {
    let arv = [];
        if (typeof arguments === 'string') {
            let arr = arguments.split('');
            for (let i = arr.length - 1; i >= 0; --i) {
                arv.push(arr[i])
            }
            return arv.join('');
        } else
            if (typeof arguments  === "object") {
                const args = [...arguments]
                for (let i = args[0].length - 1; i >= 0; --i) {
                    arv.push(args[0][i])
                }
                return arv
            }
}

/*
function isAnagram(text) {
    let antext = text.split('');
    let retext = antext.slice();
    let revers = retext.reverse();
        if (antext == revers) {
            return true;
        } else {
            return false;
        }

}
*/

function assertEquals(expected, actual) {
    if (actual !== expected) {
        console.log("Error! '" + expected + "' was expected but '" + actual + "' encountered" )
    }
}
function assertTrue(message, condition) {
    if (!condition) {
        console.log("Error for '" + message + "'");
    }
}

function assertFalse(message, condition) {
    if (condition) {
        console.log("Error for '" + message + "'");
    }
}

function processArray(array, operation) {
    if (array.length == 0) {
        return 0;
    }
    let result = array[0];
    for (let i = 1; i < array.length; i++) {
        result = operation(result, array[i]);
    }
    return result;
}

function sum(val1, val2) {
    return val1 + val2;
}

function multi(val1, val2) {
    return val1 * val2;
}

function isEven(val1) {
    return val1 % 2 == 0;
}

function isOdd(val1) {
    return !isEven(val1);
}

function sumeven(val1, val2) {
    if (isOdd(val1) && isEven(val2)) {
        return val2;
    } else if (isEven(val1) && isEven(val2)) {
        return val1 + val2;
    } else if (isEven(val1) && isOdd(val2)) {
        return val1;
    } else {
        return 0;
    }
}


function wordquantity(someText, condition) {
    let textArray = someText.split(' ');
    let sum = 0;

    if (textArray == 0) {
        alert('No any arguments');
    } else {
        for (let i = 0; i < textArray.length; i++) {
            if (condition(textArray[i])) {
                sum++;
            }

        }
        return sum;
    }
}

function wordfind(word) {

    return word.charAt(0) == 'a';

}


function sortie(a) {
    let i, buffer,
        sorted = false;
    while (!sorted) {
        sorted = true;
        for (i = 0; i < a.length-1; i++) {
            if (a[i] > a[i + 1]) {
                sorted = false;
                buffer = a[i];
                a[i] = a[i + 1];
                a[i + 1] = buffer;
            }
        }
    }
    return a;
}


function Operation (array) {
    this.sum = array.reduce(function (previousValue, currentItem) {
            return previousValue + currentItem
        }, 0);
    this.multiplication = array.reduce(function (previousValue, currentItem) {
        return previousValue * currentItem
    }, 1);
    }


/*function Operation1 (array) {
    this.sum = function () {
        let i, sum;
        for (i =0; i < array.length; i++) {
            sum = array[i] + array[i+1];
            i++;
        }
    }

}*/

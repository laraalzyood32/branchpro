'use strict';


function sum(a, b) {
        
    let  Array = [];
    let  sumout = a +b;
    Array[0] = sumout
    let result = `The sum of' + ${a} and ${b} is ${sumout}`;
    Array[1] = result;
    return Array;
    }

    testSum(4, 7);


function multiply(a, b) {
    let array =[];
    let cross=a*b;
    Array[0] = cross
    let result1 = `The multiply of ${a} and ${b} is ${cross}.`
    Array[1] = result1;
    return Array;
    }
    testMultiply(5,9);


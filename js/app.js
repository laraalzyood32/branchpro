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
    let Array1 =[];
    let cross=a*b;
    Array1[0] = cross
    let result1 = `The multiply of ${a} and ${b} is ${cross}.`
    Array1[1] = result1;
    return Array1;
    }
    testMultiply(5,9);

    function sumAndMultiply(a, b, c) {
             let Array2 = []
        
          let  add = sum(a, b)[0];
           let  finalres= sum(add, c)[0];
           Array2[0] = finalres;
        
           let  mul = multiply(a, b)[0];
          let  finalmul = multiply(mul, c)[0];
          Array2[1] = finalmul;
        
           Array2[2] = `${a} and ${b} and ${c} sum to ${finalres}.`
          Array2[3] = `The product of ${a} and ${b} and ${c} is ${finalmul}.`
        return sumAndMultiply;
        
         }
         testSumAndMultiply(4,7,5);

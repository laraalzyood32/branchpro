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


         let  testArray = [2, 3, 4]; 

        function sumArray(add3) { 
            let array3 = [];
   
       let add3= sum((add3[0]), (add3[1]));
         add3 = add3[0];
         let finaladd1= sum(add3, add3[2][0]);

           array3[0] = finalSum;

        array3[1] = `${sumArr[0]},${sumArr[1]},${sumArr[2]} was passed in as an array of numbers, and ${finalSum} is their sum.`
        return array3;

           }
 testSumArray(testArray);

 function multiplyArray(multArr) { 
       let  Array4= [];
    
    let AsyncB = multiply((multArr[0]), (multArr[1]));
      AsyncB = AsyncB[0];
    
     
     let finalmul= multiply(AsyncB, multArr[2]);
      finalmul = finalmul[0];
      Array4[0] = finalmul;
    
    
       Array4[1] = `The numbers ${multArr[0]},${multArr[1]},${multArr[2]} have a product of ${finalmul}.`
    
     return Array4;
    
     }
    
    
     testMultiplyArray(testArray);
 

     let  testDynamicArray = [1,2,3,4,5]; 


      function multiplyAnyArray(dynamicArray) { 
     
              let  Array6 = [];
       
              let numberOfElements = dynamicArray.length;
     
                 let  product;
     
       let  value = dynamicArray[0];
     
       for (let  i = 1; i < numberOfElements + 1; i++) {
         product = multiply(value, i);
         value = product[0];
         console.log(`value is ${value}`);
      }
     
       Array6[0] = value;
     
       Array6[1] = (`The numbers ${dynamicArray} have a product of ${value}.`)
       return Array6;
      }

     testMultiplyAnyArray(testDynamicArray);
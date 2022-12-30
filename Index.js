// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// FizzBuzz
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
INSTRUCTIONS
Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
*/


/*
PSEUDOCODE
1. create function that takes integers between 1 and 100 as the variable "n".
2. create method that checks if integer is between 1 - 100 else it throws error.
3. create method that checks if integer is devisable by 3 & 5 and if so then it returns "FizzBuzz".
4. create method that checks if integer is devisable by 3 and if so then it returns "Fizz".
5. create method that checks if integer is devisable by 5 and if so then it returns "Buzz".
 
*/

// SOLUTION
function fizzBuzzChecker(n) {
if (n >0 && n < 101) {
    if (n % 3 === 0 && n % 5 === 0) {
        console.log("FizzBuzz");
    }else if(n % 3 === 0){
        console.log("Fizz");
    }else if(n % 5 === 0){
        console.log("Buzz");
    }else {
        console.log(n);
    }
}else {
    console.log("Interger is out of bounds. Please insert number between 1 & 100.");
}};

// TEST CASES
for (let i = 0; i < 102; i++) {
    console.log(fizzBuzzChecker(i));
}







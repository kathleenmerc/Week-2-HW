// W2D1 Homework 

//1. 
// (completed above) Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

//Solution 1a.
// function maxOfTwoNumbers(x, y) {
//     if (x >= y) {
//       return x;
//     } else {
//       return y;
//     }
  
//     // or more "elegantly" using the fantastic ternary expression!
//     // return  x >= y ? x : y;
//   }
  
//   console.log(maxOfTwoNumbers(3, 9));

//Solution 1b.
function maxOfTwoNumbers (num1, num2) {
    if (num1 >= num2) {
        return num1
    } else if (num2 >= num1) {
        return num2
    }
}
console.log("Number 1 Solution:")

console.log(maxOfTwoNumbers(7,6))


//2.
// Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.


//3. 
// Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.


//4.
// Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

//5.
// Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product of those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

//6.
// Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.

//6.
// Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".


//7.
// Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.

//8.
// Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments, and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].

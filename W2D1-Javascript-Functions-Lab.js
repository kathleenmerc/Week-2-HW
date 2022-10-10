// W2D1 Homework 

//1. 
// Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

//Solution 1a. (already given solution)
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
console.log("Number 1 Solution:")

function maxOfTwoNumbers(num1, num2) {
    if (num1 >= num2) {
        return num1
    } else if (num2 >= num1) {
        return num2
    }
}

console.log(maxOfTwoNumbers(7, 6))


//2.
// Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
console.log("Number 2 Solution:")

const maxOfThree = (x, y, z) => {
    if ((x > y && x > z) || (x === y && x > z) || (x === z && x > y)) {
        return x
    } else if ((y > x && y > z) || (y === x && y > z) || (y === z && y > z)) {
        return y
    } else if ((z > x && z > y) || (z === x && z > y) || (z === y && z > x)) {
        return z
    } else if (x === y && x === z) {
        return x
    } else {
        return x
    }
}

console.log("Below will return x:")
console.log(maxOfThree(5, 4, 3))
console.log(maxOfThree(7, 7, 2))
console.log(maxOfThree(9, 4, 9))

console.log("Below will return y:")
console.log(maxOfThree(9, 10, 8))
console.log(maxOfThree(11, 11, 7))
console.log(maxOfThree(10, 15, 15))

console.log("Below will return z:")
console.log(maxOfThree(9, 10, 22))
console.log(maxOfThree(32, 11, 32))
console.log(maxOfThree(15, 18, 18))

console.log("Below will return same number if x = y = z:")
console.log(maxOfThree(5, 5, 5))


//3. 
// Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.
console.log("Number 3 Solution:")

function isCharAVowel(character) {
    let lowerCaseCharacter = character.toLowerCase()
    if (lowerCaseCharacter === 'a' || lowerCaseCharacter === 'e' || lowerCaseCharacter === 'i' || lowerCaseCharacter === 'o' || lowerCaseCharacter === 'u') {
        return true
    } else {
        return false
    }
}

console.log(isCharAVowel("a"))
console.log(isCharAVowel("E"))
console.log(isCharAVowel("i"))
console.log(isCharAVowel("O"))
console.log(isCharAVowel("u"))
console.log(isCharAVowel("x"))


//4.
// Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.
console.log("Number 4 Solution:")

let sumArray = (arrayInput) => {
    let base = 0
    arrayInput.forEach((nextIndex) => {
        base += nextIndex
    })
    return base
}

console.log(sumArray([2, 4, 5]))


//5.
// Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product of those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
console.log("Number 5 Solution:")

function multiplyArray(arrayNumbers) {
    let baseTwo = 1
    arrayNumbers.forEach((num) => {
        baseTwo = baseTwo * num
    })
    return baseTwo
}

console.log(multiplyArray([2, 4, 5]))


//6.
// Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
console.log("Number 6 Solution:")

let numArgs = (...args) => {
    return args.length
}

console.log(numArgs("a", "b", "c", "d"))
console.log(numArgs(1, 2, 3, 4, 5))


//7.
// Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".
console.log("Number 7 Solution:")

function reverseStraight(str) {
    return str
        .split("")
        .reverse()
        .join("")
}

console.log(reverseStraight("I am writing this sentence backwards."))


//8.
// Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
console.log("Number 8 Solution:")

const longestStringInArray = (arrayStr) => {
    let base = arrayStr[0]
    for (i = 0; i < arrayStr.length; i++) {
        if (arrayStr[i].length > base.length) {
            base = arrayStr[i]
        }
    }
    console.log(base.length)
}

longestStringInArray(["mom", "dad", "sister", "brother", "reallylongword"])


//9.
// Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments, and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].
console.log("Number 9 Solution:")

function stringsLongerThan (arrayOfStrings, number) {
    longerLengths = [];

    arrayOfStrings.forEach((eachString) => {
        if (eachString.length > number) {
            longerLengths.push(eachString)
        }
    })
    return longerLengths
}
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3)) 
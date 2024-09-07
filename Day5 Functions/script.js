// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}
checkEvenOdd(10);
checkEvenOdd(15);

// Task 2: Write a function to calculate the square of a number and return the result
function square(number) {
    return number * number;
}
console.log(`Square of 5 is ${square(5)}`);
console.log(`Square of 7 is ${square(7)}`);

// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console
const findMax = function(a, b) {
    return a > b ? a : b;
};
console.log(`Max of 10 and 20 is ${findMax(10, 20)}`);
console.log(`Max of 15 and 5 is ${findMax(15, 5)}`);

// Task 4: Write a function expression to concatenate two strings and return the result
const concatenateStrings = function(str1, str2) {
    return str1 + str2;
};
console.log(`Concatenation of "Hello" and "World" is "${concatenateStrings('Hello', 'World')}"`);

// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result
const sum = (a, b) => a + b;
console.log(`Sum of 10 and 20 is ${sum(10, 20)}`);
console.log(`Sum of 15 and 5 is ${sum(15, 5)}`);

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value
const containsChar = (str, char) => str.includes(char);
console.log(`Does "Hello" contain "e"? ${containsChar('Hello', 'e')}`);
console.log(`Does "World" contain "a"? ${containsChar('World', 'a')}`);

// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter
function multiply(a, b = 1) {
    return a * b;
}
console.log(`Product of 10 and 5 is ${multiply(10, 5)}`);
console.log(`Product of 7 (with default second parameter) is ${multiply(7)}`);

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age
function greet(name, age = 18) {
    return `Hello ${name}, you are ${age} years old.`;
}
console.log(greet('Alice', 25));
console.log(greet('Bob'));

// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times
function repeatFunction(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}
repeatFunction(() => console.log('Hello!'), 3);

// Task 10: Write a higher order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result
function higherOrderFunction(func1, func2, value) {
    return func2(func1(value));
}
const double = (num) => num * 2;
const addTen = (num) => num + 10;
console.log(`Result of doubling 5 and then adding 10: ${higherOrderFunction(double, addTen, 5)}`);
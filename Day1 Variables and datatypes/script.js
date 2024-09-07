// Day 1: Variables and Data Types

// Activity 1: Variable Declaration

// Task 1: Declare a variable using "var", assign it a number, and log the value to the console.
var numVar = 10;
console.log('Task 1:', numVar);

// Task 2: Declare a variable using "let", assign it a string, and log the value to the console.
let strLet = 'Hello World';
console.log('Task 2:', strLet);

// Activity 2: Constant Declaration

// Task 3: Declare a variable using "const", assign it a boolean value, and log the value to the console.
const boolConst = true;
console.log('Task 3:', boolConst);

// Activity 3: Data Types

// Task 4: Create variables of different "data types" (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let number = 25;
let string = 'JavaScript';
let boolean = false;
let object = { name: 'Saurabh', age: 24 };
let array = [1, 2, 3, 4, 5];

console.log('Task 4:', typeof number, typeof string, typeof boolean, typeof object, typeof array);

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let reassignVar = '45';
console.log('Task 5 (68):', reassignVar);

reassignVar = '89';
console.log('Task 5 (25):', reassignVar);

// Activity 5: Understanding const

// Task 6: Try reassigning a variable declared with const and observe the error.
const immutableVar = 'Cannot Change';
// Uncomment the line below to see the error in the console
// immutableVar = 'Trying to Change'; // This will cause an error
console.log('Task 6: Trying to reassign a const variable will cause an error');
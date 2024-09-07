// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console
const name = "John";
const age = 30;
console.log(`Name: ${name}, Age: ${age}`);

// Task 2: Create a multi-line string using template literals and log it to the console
const multiLineString = `This is a multi-line string.
It uses template literals
to span multiple lines.`;
console.log(multiLineString);

// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console
const numbers = [10, 20, 30, 40];
const [first, second] = numbers;
console.log('First:', first, 'Second:', second);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console
const book = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960
};
const { title, author } = book;
console.log('Title:', title, 'Author:', author);

// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console
const newNumbers = [...numbers, 50, 60];
console.log('New Numbers Array:', newNumbers);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result
function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
}
console.log('Sum:', sum(1, 2, 3, 4, 5));

// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter
function multiply(a, b = 1) {
    return a * b;
}
console.log('Product (with both params):', multiply(5, 2));
console.log('Product (with one param):', multiply(5));

// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console
const person = {
    name: 'Jane Doe',
    age: 28,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
console.log('Person Object:', person);
person.greet();

// Task 9: Create an object with computed property names based on variables and log the object to the console
const propName = 'favoriteColor';
const propValue = 'blue';

const dynamicObject = {
    [propName]: propValue
};
console.log('Dynamic Object:', dynamicObject);
// Helper function to display results
const displayResult = (task, result) => {
    const resultsDiv = document.getElementById('results');
    const taskResult = document.createElement('p');
    taskResult.innerHTML = `<strong>${task}</strong>: ${result}`;
    resultsDiv.appendChild(taskResult);
};

// Task 1: Add two numbers and log the result to the console
const add = (a, b) => a + b;
displayResult("Task 1: Addition of 5 and 3", add(5, 3));

// Task 2: Subtract two numbers and log the result to the console
const subtract = (a, b) => a - b;
displayResult("Task 2: Subtraction of 5 and 3", subtract(5, 3));

// Task 3: Multiply two numbers and log the result to the console
const multiply = (a, b) => a * b;
displayResult("Task 3: Multiplication of 5 and 3", multiply(5, 3));

// Task 4: Divide two numbers and log the result to the console
const divide = (a, b) => a / b;
displayResult("Task 4: Division of 5 by 3", divide(5, 3));

// Task 5: Find the remainder when one number is divided by another and log the result to the console
const remainder = (a, b) => a % b;
displayResult("Task 5: Remainder of 5 divided by 3", remainder(5, 3));

// Task 6: Use the += operator to add a number to a variable and log the result to the console
let num1 = 10;
num1 += 5;
displayResult("Task 6: After using += operator, num1", num1);

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console
let num2 = 10;
num2 -= 5;
displayResult("Task 7: After using -= operator, num2", num2);

// Task 8: Compare two numbers using > and < and log the result to the console
displayResult("Task 8: Is 5 greater than 3?", 5 > 3);
displayResult("Task 8: Is 5 less than 3?", 5 < 3);

// Task 9: Compare two numbers using >= and <= and log the result to the console
displayResult("Task 9: Is 5 greater than or equal to 3?", 5 >= 3);
displayResult("Task 9: Is 5 less than or equal to 3?", 5 <= 3);

// Task 10: Compare two numbers using == and === and log the result to the console
displayResult("Task 10: Is 5 equal to '5' using ==?", 5 == '5');
displayResult("Task 10: Is 5 equal to '5' using ===?", 5 === '5');

// Task 11: Use the && operator to combine two conditions and log the result to the console
displayResult("Task 11: Are both conditions true (5 > 3 && 5 < 10)?", 5 > 3 && 5 < 10);

// Task 12: Use the || operator to combine two conditions and log the result to the console
displayResult("Task 12: Is at least one condition true (5 > 3 || 5 > 10)?", 5 > 3 || 5 > 10);

// Task 13: Use the ! operator to negate a condition and log the result to the console
displayResult("Task 13: Negate the condition (5 > 10)", !(5 > 10));

// Task 14: Use the ternary operator to check if a number is positive or negative and log the result to the console
const checkNumber = (num) => num >= 0 ? "Positive" : "Negative";
displayResult("Task 14: Check if 5 is positive or negative", checkNumber(5));
displayResult("Task 14: Check if -3 is positive or negative", checkNumber(-3));
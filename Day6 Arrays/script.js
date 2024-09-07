const output = document.getElementById('output');

function logOutput(message) {
    const div = document.createElement('div');
    div.textContent = message;
    div.style.marginBottom = '5px'; // Adding margin for spacing between tasks
    output.appendChild(div);
}

// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const numbers = [1, 2, 3, 4, 5];
console.log('Task 1:', numbers);
logOutput(`Task 1: ${numbers}`);

// Task 2: Access the first and last elements of the array and log them to the console.
const firstElement = numbers[0];
const lastElement = numbers[numbers.length - 1];
console.log('Task 2:', firstElement, lastElement);
logOutput(`Task 2: First element: ${firstElement}, Last element: ${lastElement}`);

// Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
numbers.push(6);
console.log('Task 3:', numbers);
logOutput(`Task 3: ${numbers}`);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
numbers.pop();
console.log('Task 4:', numbers);
logOutput(`Task 4: ${numbers}`);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
numbers.shift();
console.log('Task 5:', numbers);
logOutput(`Task 5: ${numbers}`);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
numbers.unshift(0);
console.log('Task 6:', numbers);
logOutput(`Task 6: ${numbers}`);

// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const doubledNumbers = numbers.map(num => num * 2);
console.log('Task 7:', doubledNumbers);
logOutput(`Task 7: ${doubledNumbers}`);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Task 8:', evenNumbers);
logOutput(`Task 8: ${evenNumbers}`);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Task 9:', sum);
logOutput(`Task 9: Sum: ${sum}`);

// Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.
console.log('Task 10:');
logOutput('Task 10:');
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    logOutput(numbers[i]);
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log('Task 11:');
logOutput('Task 11:');
numbers.forEach(num => {
    console.log(num);
    logOutput(num);
});

// Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('Task 12:', matrix);
logOutput(`Task 12: ${JSON.stringify(matrix)}`);

// Task 13: Access and log a specific element from the two-dimensional array.
const specificElement = matrix[1][1]; // Accessing element at row 2, column 2 (index 1, 1)
console.log('Task 13:', specificElement);
logOutput(`Task 13: Specific element: ${specificElement}`);

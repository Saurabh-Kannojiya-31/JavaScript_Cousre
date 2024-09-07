import { add } from './modules/add.js';
import person from './modules/person.js';
import { multiply, divide } from './modules/namedExports.js';
import subtract from './modules/defaultExport.js';
import * as math from './modules/allExports.js';
import { getRandomElement } from './modules/thirdPartyLodash.js';
import { fetchData } from './modules/thirdPartyAxios.js';

// Helper function to update output
function updateOutput(message) {
    document.getElementById('output').textContent = message;
}

// Task 1: Add Module
document.getElementById('task1Btn').addEventListener('click', () => {
    const result = add(3, 4);
    updateOutput(`Task 1: 3 + 4 = ${result}`);
});

// Task 2: Person Module
document.getElementById('task2Btn').addEventListener('click', () => {
    const greeting = person.greet();
    updateOutput(`Task 2: ${greeting}`);
});

// Task 3: Named Exports
document.getElementById('task3Btn').addEventListener('click', () => {
    const mulResult = multiply(3, 4);
    const divResult = divide(10, 2);
    updateOutput(`Task 3: 3 * 4 = ${mulResult}, 10 / 2 = ${divResult}`);
});

// Task 4: Default Export
document.getElementById('task4Btn').addEventListener('click', () => {
    const result = subtract(10, 5);
    updateOutput(`Task 4: 10 - 5 = ${result}`);
});

// Task 5: Import Entire Module
document.getElementById('task5Btn').addEventListener('click', () => {
    const circ = math.circumference(5);
    const area = math.area(5);
    updateOutput(`Task 5: Circumference of radius 5 = ${circ}, Area of radius 5 = ${area}`);
});

// Task 6: Third-Party Module (Lodash)
document.getElementById('task6Btn').addEventListener('click', () => {
    const arr = [1, 2, 3, 4, 5];
    const randomElement = getRandomElement(arr);
    updateOutput(`Task 6: Random element from [1, 2, 3, 4, 5] = ${randomElement}`);
});

// Task 7: Third-Party Module (Axios)
document.getElementById('task7Btn').addEventListener('click', async () => {
    try {
        const data = await fetchData('https://jsonplaceholder.typicode.com/posts/1');
        updateOutput(`Task 7: Fetched Data - ${JSON.stringify(data)}`);
    } catch (error) {
        updateOutput(`Task 7: ${error.message}`);
    }
});

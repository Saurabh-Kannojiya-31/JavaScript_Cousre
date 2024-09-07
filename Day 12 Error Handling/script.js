// Helper function to update output
function updateOutput(message) {
    document.getElementById('output').textContent = message;
}

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error
document.getElementById('task1Btn').addEventListener('click', () => {
    function throwError() {
        throw new Error('Task 1: Intentional Error');
    }

    try {
        throwError();
    } catch (error) {
        updateOutput(error.message);
    }
});

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero
document.getElementById('task2Btn').addEventListener('click', () => {
    function divide(a, b) {
        if (b === 0) {
            throw new Error('Task 2: Denominator cannot be zero');
        }
        return a / b;
    }

    try {
        const result = divide(10, 0);
        updateOutput(`Result: ${result}`);
    } catch (error) {
        updateOutput(error.message);
    }
});

// Task 3: Write a script that includes a try-catch block and a finally block
document.getElementById('task3Btn').addEventListener('click', () => {
    try {
        updateOutput('Task 3: Try block executed');
        throw new Error('An error occurred');
    } catch (error) {
        updateOutput(error.message);
    } finally {
        updateOutput(document.getElementById('output').textContent + '\nFinally block executed');
    }
});

// Task 4: Create a custom error class that extends the built-in Error class
document.getElementById('task4Btn').addEventListener('click', () => {
    class CustomError extends Error {
        constructor(message) {
            super(message);
            this.name = 'CustomError';
        }
    }

    function throwCustomError() {
        throw new CustomError('Task 4: This is a custom error');
    }

    try {
        throwCustomError();
    } catch (error) {
        updateOutput(`${error.name}: ${error.message}`);
    }
});

// Task 5: Write a function that validates user input and throws a custom error if validation fails
document.getElementById('task5Btn').addEventListener('click', () => {
    class ValidationError extends Error {
        constructor(message) {
            super(message);
            this.name = 'ValidationError';
        }
    }

    function validateInput(input) {
        if (!input) {
            throw new ValidationError('Task 5: Input cannot be empty');
        }
        return 'Valid input';
    }

    try {
        const result = validateInput('');
        updateOutput(result);
    } catch (error) {
        updateOutput(`${error.name}: ${error.message}`);
    }
});

// Task 6: Create a promise that randomly resolves or rejects and use .catch() to handle rejection
document.getElementById('task6Btn').addEventListener('click', () => {
    const randomPromise = new Promise((resolve, reject) => {
        const success = Math.random() > 0.5;
        setTimeout(() => {
            success ? resolve('Task 6: Promise resolved') : reject('Task 6: Promise rejected');
        }, 1000);
    });

    randomPromise
        .then((message) => {
            updateOutput(message);
        })
        .catch((error) => {
            updateOutput(error);
        });
});

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects
document.getElementById('task7Btn').addEventListener('click', async () => {
    const randomPromise = new Promise((resolve, reject) => {
        const success = Math.random() > 0.5;
        setTimeout(() => {
            success ? resolve('Task 7: Promise resolved') : reject('Task 7: Promise rejected');
        }, 1000);
    });

    try {
        const result = await randomPromise;
        updateOutput(result);
    } catch (error) {
        updateOutput(error);
    }
});

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch()
document.getElementById('task8Btn').addEventListener('click', () => {
    fetch('https://invalid.url')
        .then((response) => response.json())
        .then((data) => {
            updateOutput(`Task 8: ${data}`);
        })
        .catch((error) => {
            updateOutput(`Task 8: Fetch error - ${error.message}`);
        });
});

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch
document.getElementById('task9Btn').addEventListener('click', async () => {
    try {
        const response = await fetch('https://invalid.url');
        const data = await response.json();
        updateOutput(`Task 9: ${data}`);
    } catch (error) {
        updateOutput(`Task 9: Fetch error - ${error.message}`);
    }
});

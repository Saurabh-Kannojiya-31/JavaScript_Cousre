// Helper function to update output
function updateOutput(message) {
    document.getElementById('output').textContent = message;
}

// Task 1: Create a promise that resolves with a message after a 2-second timeout
document.getElementById('task1Btn').addEventListener('click', () => {
    const promise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Task 1: Promise resolved after 2 seconds');
        }, 2000);
    });

    promise1.then((message) => {
        updateOutput(message);
    });
});

// Task 2: Create a promise that rejects with an error message after a 2-second timeout
document.getElementById('task2Btn').addEventListener('click', () => {
    const promise2 = new Promise((_, reject) => {
        setTimeout(() => {
            reject('Task 2: Promise rejected after 2 seconds');
        }, 2000);
    });

    promise2.catch((error) => {
        updateOutput(error);
    });
});

// Task 3: Create a sequence of promises that simulate fetching data from a server
document.getElementById('task3Btn').addEventListener('click', () => {
    const fetchData = (data) => new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Fetched ${data}`);
        }, 1000);
    });

    fetchData('Data 1')
        .then((message) => {
            updateOutput(message);
            return fetchData('Data 2');
        })
        .then((message) => {
            updateOutput(message);
            return fetchData('Data 3');
        })
        .then((message) => {
            updateOutput(message);
        });
});

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value
document.getElementById('task4Btn').addEventListener('click', async () => {
    const promise4 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Task 4: Async function resolved after 2 seconds');
        }, 2000);
    });

    const result = await promise4;
    updateOutput(result);
});

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message
document.getElementById('task5Btn').addEventListener('click', async () => {
    const promise5 = new Promise((_, reject) => {
        setTimeout(() => {
            reject('Task 5: Async function rejected after 2 seconds');
        }, 2000);
    });

    try {
        const result = await promise5;
        updateOutput(result);
    } catch (error) {
        updateOutput(error);
    }
});

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises
document.getElementById('task6Btn').addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => response.json())
        .then((data) => {
            updateOutput(`Task 6: Joke - ${data.value}`);
        });
});

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await
document.getElementById('task7Btn').addEventListener('click', async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    updateOutput(`Task 7: Joke - ${data.value}`);
});

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values
document.getElementById('task8Btn').addEventListener('click', () => {
    const promiseA = new Promise((resolve) => setTimeout(() => resolve('Promise A resolved'), 1000));
    const promiseB = new Promise((resolve) => setTimeout(() => resolve('Promise B resolved'), 2000));
    const promiseC = new Promise((resolve) => setTimeout(() => resolve('Promise C resolved'), 3000));

    Promise.all([promiseA, promiseB, promiseC]).then((values) => {
        updateOutput(`Task 8: All Promises - ${values.join(', ')}`);
    });
});

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises
document.getElementById('task9Btn').addEventListener('click', () => {
    const promiseX = new Promise((resolve) => setTimeout(() => resolve('Promise X resolved'), 1000));
    const promiseY = new Promise((resolve) => setTimeout(() => resolve('Promise Y resolved'), 2000));
    const promiseZ = new Promise((resolve) => setTimeout(() => resolve('Promise Z resolved'), 3000));

    Promise.race([promiseX, promiseY, promiseZ]).then((value) => {
        updateOutput(`Task 9: First Resolved - ${value}`);
    });
});

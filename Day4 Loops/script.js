// Task 1: Print numbers from 1 to 10 using a for loop
console.log("Task 1: Print numbers from 1 to 10 using a for loop");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2: Print the multiplication table of 5 using a for loop
console.log("Task 2: Print the multiplication table of 5 using a for loop");
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// Task 3: Calculate the sum of numbers from 1 to 10 using a while loop
console.log("Task 3: Calculate the sum of numbers from 1 to 10 using a while loop");
let sum = 0;
let num = 1;
while (num <= 10) {
    sum += num;
    num++;
}
console.log("Sum:", sum);

// Task 4: Print numbers from 10 to 1 using a while loop
console.log("Task 4: Print numbers from 10 to 1 using a while loop");
num = 10;
while (num >= 1) {
    console.log(num);
    num--;
}

// Task 5: Print numbers from 1 to 5 using a do... while loop
console.log("Task 5: Print numbers from 1 to 5 using a do... while loop");
num = 1;
do {
    console.log(num);
    num++;
} while (num <= 5);

// Task 6: Calculate the factorial of a number using a do... while loop
console.log("Task 6: Calculate the factorial of a number using a do... while loop");
const factorial = (n) => {
    let result = 1;
    let i = n;
    do {
        result *= i;
        i--;
    } while (i > 0);
    return result;
};
console.log("Factorial of 5:", factorial(5));
console.log("Factorial of 4:", factorial(4));

// Task 7: Print a pattern using nested for loops
console.log("Task 7: Print a pattern using nested for loops");
const printPattern = (n) => {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
};
printPattern(5);
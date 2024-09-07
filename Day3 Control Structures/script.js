// Task 1: Check if a number is positive, negative, or zero
const checkNumber = (num) => {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
};
console.log("Task 1: Check if 5 is positive, negative, or zero:", checkNumber(5));
console.log("Task 1: Check if -3 is positive, negative, or zero:", checkNumber(-3));
console.log("Task 1: Check if 0 is positive, negative, or zero:", checkNumber(0));

// Task 2: Check if a person is eligible to vote (age >= 18)
const checkVotingEligibility = (age) => age >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log("Task 2: Check if age 20 is eligible to vote:", checkVotingEligibility(20));
console.log("Task 2: Check if age 16 is eligible to vote:", checkVotingEligibility(16));

// Task 3: Find the largest of three numbers using nested if-else statements
const findLargest = (a, b, c) => {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
};
console.log("Task 3: Find the largest of 3, 7, 5:", findLargest(3, 7, 5));
console.log("Task 3: Find the largest of 10, 10, 5:", findLargest(10, 10, 5));
console.log("Task 3: Find the largest of 2, 2, 2:", findLargest(2, 2, 2));

// Task 4: Determine the day of the week based on a number (1-7) using switch case
const getDayOfWeek = (dayNumber) => {
    switch (dayNumber) {
        case 1: return "Sunday";
        case 2: return "Monday";
        case 3: return "Tuesday";
        case 4: return "Wednesday";
        case 5: return "Thursday";
        case 6: return "Friday";
        case 7: return "Saturday";
        default: return "Invalid day number";
    }
};
console.log("Task 4: Determine the day for number 3:", getDayOfWeek(3));
console.log("Task 4: Determine the day for number 6:", getDayOfWeek(6));
console.log("Task 4: Determine the day for number 8:", getDayOfWeek(8));

// Task 5: Assign a grade based on a score using switch case
const assignGrade = (score) => {
    switch (true) {
        case (score >= 90): return 'A';
        case (score >= 80): return 'B';
        case (score >= 70): return 'C';
        case (score >= 60): return 'D';
        default: return 'F';
    }
};
console.log("Task 5: Assign a grade for score 85:", assignGrade(85));
console.log("Task 5: Assign a grade for score 72:", assignGrade(72));
console.log("Task 5: Assign a grade for score 50:", assignGrade(50));

// Task 6: Check if a number is even or odd using the ternary operator
const checkEvenOdd = (num) => num % 2 === 0 ? "Even" : "Odd";
console.log("Task 6: Check if 4 is even or odd:", checkEvenOdd(4));
console.log("Task 6: Check if 7 is even or odd:", checkEvenOdd(7));

// Task 7: Check if a year is a leap year using multiple conditions
const checkLeapYear = (year) => {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year";
            } else {
                return "Not a leap year";
            }
        } else {
            return "Leap year";
        }
    } else {
        return "Not a leap year";
    }
};
console.log("Task 7: Check if 2020 is a leap year:", checkLeapYear(2020));
console.log("Task 7: Check if 1900 is a leap year:", checkLeapYear(1900));
console.log("Task 7: Check if 2000 is a leap year:", checkLeapYear(2000));

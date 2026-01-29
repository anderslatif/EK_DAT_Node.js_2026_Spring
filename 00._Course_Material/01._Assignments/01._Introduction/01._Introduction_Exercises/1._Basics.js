// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";

// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

// const selfIntroduction = "My first name is " + firstName + " and my last name is " + lastName;

// backticks, String template literal, String interpolation
const selfIntroduction = `My first name is ${firstName} and my last name is ${lastName}`;
// console.log(selfIntroduction);

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2025";
const increment = 1;

// Add the year plus the increment
// The result should be 2026
// You cannot touch the first or the second line

// const currentYear = parseInt(year) + increment;
// const currentYear = Number(year) + increment;
const currentYear = + year + increment;

console.log(currentYear);


// console.log(parseInt("324sdfdsf234324"));
// console.log(Number("324sdfdsf"));


// --------------------------------------

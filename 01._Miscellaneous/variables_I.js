
// Node REPL

// type coercion
// strict equality


// Rule 1: use const per default unless it needs to change, then use let

// const is constant in the assignment

const luckyNumber = 4;

console.log(luckyNumber);

// JS Data types
// String, Boolean, Number, BigInt, Object, Symbol, null, undefined 

const person = {
    // key-value pair    
    name: "Matias"
};

person.name = "Gustav";

person.age = 10021132134;

console.log(person);

const people = [];

people.push("Victor");

console.log(people);

// ASI

// How to define string in JS:
// ""
// ''
// ``

"He is soooo ''''''''''''''fine' ";
'He is soooo """"""""""""""fine" ';
const stringTemplateLiteral = `He is soooo nice "'"'  ${2 + 2} 

I can have
multi-line string
    yaaay
`


console.log(stringTemplateLiteral);

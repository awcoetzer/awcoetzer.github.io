// Lecture 9
console.log("LECTURE 9");
console.log("👋 This is how to log to the console!");
console.log("");

// Lecture 10
console.log("LECTURE 10");
console.log("Andre");

let firstName = "Andre";
console.log(firstName);
console.log("");

// Lecture 10 - Assignment
console.log("LECTURE 10 - ASSIGNMENT");
const country = "Bulgaria";
const continent = "Europe";
let population = 6899000;

console.log(`${country}, ${continent}, ${population}`);
console.log("");

// Lecture 11
console.log("LECTURE 11");
let lastName;

console.log(lastName);
console.log(typeof lastName);

let javascript = true;
console.log(javascript);

javascript = "YES!";
console.log(javascript);
console.log("");

// Lecture 12 - Assignment
console.log("LECTURE 12 -  ASSIGNMENT");
const isIsland = false;
let language;

console.log(
  typeof country,
  typeof population,
  typeof isIsland,
  typeof language
);
console.log("");

// Lecture 13 - Assignment
console.log("LECTURE 13 -  ASSIGNMENT");
language = "Bulgarian";

console.log(language);

console.log("");

// Lecture 14
console.log("LECTURE 14");

console.log(2 + 1);
console.log(3 - 2);
console.log(4 * 2);
console.log(6 / 2);
console.log(2 ** 2);
console.log(3 % 2);

const now = 2022;
const ageAndre = now - 1989;
const ageSammy = now - 1991;
console.log(ageAndre, ageSammy);

const myText1 = "I love";
const myText2 = "JavaScript";
console.log(myText1 + " " + myText2);

let x = 10 + 20;
x += 10; // which means x = x + 10
x -= 5; // which means x = x - 10
console.log(x);

x++;
console.log(x);

x--;
console.log(x);

let age1 = 18;
let age2 = 33;
let age3 = 33;

console.log(age1 > age2);
console.log(age1 < age2);
console.log(age2 >= age3);
console.log(age2 <= age3);
console.log("");

// Lecture 14 - Assignment
console.log("LECTURE 14 - ASSIGNMENT");
let halfOfPopulation = population / 2;
console.log(halfOfPopulation);

console.log(population);
population++;
console.log(population);

let finland = 6000000;
console.log(population > finland);

let averagePopulation = 33000000;
console.log(population < averagePopulation);

// String Concatenation
let description =
  country +
  " is in " +
  continent +
  ", and it's " +
  population +
  " people speak " +
  language;
console.log(description);

// String template literals
let description2 = `${country} is in ${continent}, and it's ${population} people speak ${language}`;
console.log(description2);
console.log("");

// Coding Challenge - 1
console.log("CODING CHALLENGE - 1");

// Data 1
/*
const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;
*/

// Data 2
const weightMark = 95;
const heightMark = 1.88;
const weightJohn = 85;
const heightJohn = 1.76;

const bmiMark = weightMark / heightMark ** 2;
const bmiJohn = weightJohn / (heightJohn * heightJohn);
const markHigherBMI = bmiMark > bmiJohn ? "Mark's is higher" : "John's is higher";

console.log(`Mark's BMI is ${bmiMark}, John's BMI is ${bmiJohn} and is Mark's BMI higher than John's? : ${markHigherBMI}`);

console.log("");

// Lecture 17
console.log("LECTURE 17");

const myName = 'Andre';

// String concatenation
console.log('Hello, my name is ' + myName);

// String template literals
console.log(`Hello, my name is ${myName}`)
console.log("");


// Lecture 17 - Assignment
console.log("LECTURE 17 - ASSIGNMENT");
// String template literals
let description3 = `${country} is in ${continent}, and it's ${population} people speak ${language}`;

console.log(description3)

console.log("");

// Lecture 18
console.log("LECTURE 18");

let age = 20;

if (age >= 18) {
  console.log('Is allowed to drive 🚗')
} else {
  const yearsLeft = age - 18;
  console.log(`Sorry, you have to wait ${yearsLeft} years before to can get your drivers license`)
}

console.log("");

// Lecture 18 - Assignment
console.log("LECTURE 18 -  ASSIGNMENT");

if (population > averagePopulation) {
  console.log(`${country} population is above average.`)
} else {
  console.log(`${country} population is ${averagePopulation - population} below the average population`)
}

console.log("");

// Coding challenge - 2
console.log("Coding challenge - 2");

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI(${bmiMark}) is higher than John's BMI(${bmiJohn})`)
} else {
  console.log(`John's BMI(${bmiJohn} is higher than Mark's BMI(${bmiMark}))`)
}

console.log("");

// Lecture 20
console.log("LECTURE 20");

const inputYear = '1991';

console.log(Number(inputYear));
console.log(String(23), 23);

console.log(Number('Andre')); // will result in NaN
console.log(typeof NaN)

console.log('5' + 3 + '2')

console.log('5' - 3 - '2')

let n = '1' + 1;
n -= 1;
console.log(n)

console.log(2 + 3 + 4 + '5')
console.log('10' - '4' - '2' - 2 + '5')

console.log("");

// Lecture 20 - Assignment
console.log("LECTURE 20 - ASSIGNMENT");

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

console.log("");

// Lecture 21
console.log("LECTURE 21");

console.log( 0, ' ', undefined, null, NaN, false);

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

 // Falsy values
 console.log(Boolean(''));

 // Truthy values
 console.log(Boolean('Am i falsy?'));

 let hasMoney = 0;

 if (hasMoney) {
  console.log("Don't spend it all!");
 }  else {
  console.log('Get a job!')
 }

console.log("");

// Lecture 22
console.log("LECTURE 22");

console.log('1' === 1);
console.log(1 === 1);

console.log('1' == 1);
console.log(1 == 1);

console.log("");

// Lecture 22 - Assignment
console.log("LECTURE 22 -  ASSIGNMENT");

// const numNeighbours = prompt('How many neighbour countries does your country have?')

// if (Number(numNeighbours) === 1) {
//   console.log('Only 1 border');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No border');
// }

console.log("");
/*
  Notes:
        Lecture: 🦞
        Lecture Challenge: 🐟
        Assignment: 🦀
        Coding Challenge: 🦑
*/

//////////////////// Lecture 32 ////////////////////

console.log('🦞 LECTURE 32');

// console.log("'use strict';");

console.log('');

//////////////////// Lecture 33 ////////////////////
console.log('🦞 LECTURE 33');

//  Just logs this string to console

// function logger() {
//   console.log('Hello, my name is Andre');
// }

// logger();
// logger();
// logger();

// const test = logger();
// console.log(typeof test);

/*
  Juicer function that allows for demonstration
  of how functions can accept information and
  return information.
*/
// function juicer(nApples, nOranges) {
//   const juice = `Your juice is ${nApples} apples and ${nOranges} Oranges!`;
//   return juice;
// }

// const myJuice = juicer(3, 4);

// console.log(myJuice);

console.log(''); 

//////////////////// Lecture 33 - Assignment ////////////////////
console.log('🦀 LECTURE 33 - ASSIGNMENT');

// function describeCountry(country, population, capitalCity) {
//   const myCountry = `${country} has ${population} million people and it's capital is ${capitalCity}`;

//   return myCountry;
// }

// const bulgaria = describeCountry('Bulgaria', 7.4, 'Sofia');
// const southAfrica = describeCountry(
//   'South Africa',
//   60,
//   'Pretoria, Bloemfontein and Cape Town',
// );
// const columbia = describeCountry('Columbia', 50, 'Bogota');

// console.log(bulgaria);
// console.log(southAfrica);
// console.log(columbia);

console.log('');

//////////////////// Lecture 34 ////////////////////
console.log('🦞 LECTURE 34');

// Declaring a function
// const age1 = calcAge1(1989); // invoking function before declaration
// function calcAge1(birthYear) {
//   console.log('Declaring a function');
//   return 2023 - birthYear;
// }

// console.log(age1);

// Function expression

// const calcAge2 = function (birthYear) {
//   console.log('Function expression');
//   return 2023 - birthYear;
// };
// const age2 = calcAge2(1989);

// console.log(age2);

console.log('');

//////////////////// Lecture 34 - Assignment ////////////////////
console.log('🦀 LECTURE 34 - ASSIGNMENT');

// console.log('--- Declaring Functions ---');

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const jamaicaPopulation = percentageOfWorld1(3);
// const bulgariaPopulation = percentageOfWorld1(7.4);
// const southAfricaPopulation = percentageOfWorld1(60);

// console.log(`
// Jamaica's population is ${jamaicaPopulation}% of the world's population,
// Bulgaria's population is ${bulgariaPopulation}% of the world's population,
// South Africa's population is ${southAfricaPopulation}% of the world's population.
// `);

// console.log('--- Functions Expressions ---');

// const percentageOfWorld2 = function () {
//   return (population / 7900) * 100;
// };

// const americaPopulation = percentageOfWorld1(332);
// const canadaPopulation = percentageOfWorld1(37);
// const mexicoPopulation = percentageOfWorld1(129);

// console.log(`
// America's population is ${americaPopulation}% of the world's population,
// Canada's population is ${canadaPopulation}% of the world's population,
// Mexico's population is ${mexicoPopulation}% of the world's population.
// `);

console.log('');

//////////////////// Lecture 35 ////////////////////
console.log('🦞 LECTURE 35');

// const calcAge3 = birthYear => 2023 - birthYear;
// const age3 = calcAge3(1989);

// console.log(age3);

// const yearsBeforeRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;

//   return `${firstName}'s retirement is in ${retirement} years`;
// };

// console.log(yearsBeforeRetirement(1989, 'Andre'));

// console.log('');

// //////////////////// Lecture 35 - Assignment ////////////////////
// console.log('🦀 LECTURE 35 - ASSIGNMENT');

// console.log('--- Functions Expressions ---');
// const percentageOfWorld3 = (population) => (population / 7900) * 100;

// const columbiaPopulation = percentageOfWorld1(50);
// const swedenPopulation = percentageOfWorld1(10.4);
// const japanPopulation = percentageOfWorld1(126.17);

// console.log(`
// Columbia's population is ${columbiaPopulation}% of the world's population,
// Sweden's population is ${swedenPopulation}% of the world's population,
// Japan's population is ${japanPopulation}% of the world's population.
// `);

console.log('');

//////////////////// Lecture 36 ////////////////////
console.log('🦞 LECTURE 36');

// cutting the fruit into pieces
// const fruitPieces = function (fruit) {
//   return fruit * 6;
// }

// juicing the fruiting together using the pieces
// const juicer = function (apples, oranges) {
//   const applePieces = fruitPieces(apples);
//   const orangePieces = fruitPieces(oranges);

//   return `Your juice was made with ${applePieces} apple pieces and ${orangePieces} orange pieces.`
// }

// console.log(juicer(3, 2));

console.log('');

//////////////////// Lecture 36 - Assignment ////////////////////
console.log('🦀 LECTURE 36 - ASSIGNMENT');

// const describePopulation = function (country, population) {
//   return `${country} has ${population} million people, which is ${percentageOfWorld1(population)}% of the world`
// }

// console.log(describePopulation('Bahamas', 397))
// console.log(describePopulation('India', 1350))
// console.log(describePopulation('Brazil', 215))

console.log('');

//////////////////// Lecture 37 ////////////////////
console.log('🦞 LECTURE 37');

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// }

// const yearsBeforeRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement >= 1) {
//     return `${firstName} has ${retirement} years before retirement`;
//   } else {
//     return -1;
//   };
// };

// console.log(yearsBeforeRetirement(1989, 'Andre'))
// console.log(yearsBeforeRetirement(1945, 'John'))

console.log('');

//////////////////// Coding challenge - 1 ////////////////////
console.log('🦑 CODING CHALLENGE - 1');

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphin's win (${avgDolphins} vs. ${avgKoalas})`;
//   } else if (avgKoalas >= 2 * avgDolphins) { 
//     return `Koala's win (${avgKoalas} vs. ${avgDolphins})`;
//   } else {
//     return `No one won...`
//   };
// };

// console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// console.log(checkWinner(scoreDolphins, scoreKoalas));

console.log('');

//////////////////// Lecture 39 ////////////////////
console.log('🦞 LECTURE 39');
// Creating arrays

// const friend1 = 'Scott';
// const friend2 = 'Frank';
// const friend3 = 'Jack';

// Array literal
// const friends = ['Scott', 'Frank', 'Jack'];

// Creating an array using a function
// const arr = new Array(1989, 1990, 1991, 1992);

// console.log(friends);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length -1]);

// friends[2] = 'Sammy';
// console.log(friends)

// const firstName = 'Andre';

// const andre = [
//   firstName,
//   'Coetzer',
//   33,
//   'Developer',
//   friends,
// ]

// console.log(andre)
// console.log(`${andre[0]}'s best friend is ${andre[andre.length -1][0]}`)

console.log('');

//////////////////// Lecture 39 - Assignment ////////////////////
console.log('🦀 LECTURE 39 - ASSIGNMENT');

// const populations = [7, 60, 320, 50];

// console.log(populations.length === 4);
// console.log(populations);

// function percentageOfWorld1 (population) {
//   const percentage = (population / 7900) * 100;

//   return percentage.toFixed(2);
// };

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3])
// ];

// console.log(percentages)

console.log('');

//////////////////// Lecture 40 ////////////////////
console.log('🦞 LECTURE 40');

// Example 1

const burger = [
  'Patty',
];

console.log(burger);

// To add an element to the end of an array
burger.push('Bottom Bun');
console.log(burger);

// To add an element to the start of an array
burger.unshift('Top Bun');
console.log(burger);

// Example 2

// To remove an element to the end of an array
burger.pop();
console.log(burger);

// To remove an element to the start of an array
burger.shift();
console.log(burger);

// Example 3

const findWaldo = [
  'not Waldo',
  'not Waldo',
  'not Waldo',
  'Waldo',
  'not Waldo',
  'not Waldo'
];

// checking the index value of waldo
console.log(findWaldo.indexOf('Waldo'));

// checking if waldo is in the array
console.log(findWaldo.includes('Waldo'));

console.log('');

//////////////////// Lecture 40 - Assignment ////////////////////
console.log('🦀 LECTURE 40 - ASSIGNMENT');

console.log('');


//////////////////// Coding Challenge - 2 ////////////////////
console.log('🦑 CODING CHALLENGE - 2');

console.log('');


//////////////////// Lecture 42 ////////////////////
console.log('🦞 LECTURE 42');

console.log('');

//////////////////// Lecture 42 - Assignment ////////////////////
console.log('🦀 LECTURE 42 - ASSIGNMENT');

console.log('');

//////////////////// Lecture 43 ////////////////////
console.log('🦞 LECTURE 43');

console.log('');

//////////////////// Lecture 43 - Assignment ////////////////////
console.log('🦀 LECTURE 43 - ASSIGNMENT');

console.log('');

//////////////////// Lecture 44 ////////////////////
console.log('🦞 LECTURE 44');

console.log('');

//////////////////// Lecture 44 - Assignment ////////////////////
console.log('🦀 LECTURE 44 - ASSIGNMENT');

console.log('');

//////////////////// Coding Challenge - 3 ////////////////////
console.log('🦞 LECTURE 40');

console.log('');

//////////////////// Lecture 46 ////////////////////
console.log('🦞 LECTURE 46');

console.log('');

//////////////////// Lecture 46 - Assignment ////////////////////
console.log('🦀 LECTURE 46 - ASSIGNMENT');

console.log('');

//////////////////// Lecture 47 ////////////////////
console.log('🦞 LECTURE 47');

console.log('');

//////////////////// Lecture 47 - Assignment ////////////////////
console.log('🦀 LECTURE 47 - ASSIGNMENT');

console.log('');

//////////////////// Lecture 48 ////////////////////
console.log('🦞 LECTURE 48');

console.log('');

//////////////////// Lecture 48 - Assignment ////////////////////
console.log('🦀 LECTURE 48 - ASSIGNMENT');

console.log('');

//////////////////// Lecture 49 ////////////////////
console.log('🦞 LECTURE 49');

console.log('');

//////////////////// Lecture 49 - Assignment ////////////////////
console.log('🦀 LECTURE 49 - ASSIGNMENT');

console.log('');

//////////////////// Coding Challenge - 4 ////////////////////
console.log('🦑 CODING CHALLENGE - 4');

console.log('');

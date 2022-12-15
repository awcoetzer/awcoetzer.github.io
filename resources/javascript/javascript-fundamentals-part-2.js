"use strict";

/*
  Notes:
        Lecture: 🦞
        Lecture Challenge: 🐟
        Assignment: 🦀
        Coding Challenge: 🦑
*/

// Lecture 32

console.log("🦞 LECTURE 32");

console.log("'use strict';");

console.log("");

// Lecture 33
console.log("🦞 LECTURE 33");

//  Just logs this string to console

function logger() {
  console.log("Hello, my name is Andre");
}

logger();
logger();
logger();

const test = logger();
console.log(typeof test);

/*
  Juicer function that allows for demonstration
  of how functions can accept information and
  return information.
*/
function juicer(nApples, nOranges) {
  const juice = `Your juice is ${nApples} apples and ${nOranges} Oranges!`;
  return juice;
}
const myJuice = juicer(3, 4);
console.log(myJuice);

console.log("");

// Lecture 33 - Assignment
console.log("🦀 LECTURE 33 - ASSIGNMENT");

function describeCountry(country, population, capitalCity) {
  const myCountry = `${country} has ${population} million people and it's capital is ${capitalCity}`;
  return myCountry;
}

const bulgaria = describeCountry("Bulgaria", 7.4, "Sofia");
const southAfrica = describeCountry(
  "South Africa",
  60,
  "Pretoria, Bloemfontein and Cape Town"
);
const columbia = describeCountry("Columbia", 50, "Bogota");

console.log(bulgaria);
console.log(southAfrica);
console.log(columbia);

console.log("");

// Lecture 34
console.log("🦞 LECTURE 34");

// Declaring a function
const age1 = calcAge1(1989); // invoking function before declaration
function calcAge1(birthYear) {
  console.log("Declaring a function");
  return 2023 - birthYear;
}

console.log(age1);

// Function expression

const calcAge2 = function (birthYear) {
  console.log("Function expression");
  return 2023 - birthYear;
};
const age2 = calcAge2(1989);

console.log(age2);

console.log("");

// Lecture 34 - Assignment
console.log("🦀 LECTURE 34 - ASSIGNMENT");

// Declaring functions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const jamaicaPopulation = percentageOfWorld1(3);
const bulgariaPopulation = percentageOfWorld1(7.4);
const southAfricaPopulation = percentageOfWorld1(60);

console.log(
  `Jamaica's population is ${jamaicaPopulation.toFixed(2)}% of the world's population`
);
console.log(
  `Bulgaria's population is ${bulgariaPopulation.toFixed(2)}% of the world's population`
);
console.log(
  `South Africa's population is ${southAfricaPopulation.toFixed(2)}% of the world's population`
);

// Function expressions
const percentageOfWorld2 = function () {
  return (population / 7900) * 100;
};

const americaPopulation = percentageOfWorld1(332);
const canadaPopulation = percentageOfWorld1(37);
const mexicoPopulation = percentageOfWorld1(129);

console.log(
  `America's population is ${americaPopulation.toFixed(2)}% of the world's population`
);
console.log(
  `Canada's population is ${canadaPopulation.toFixed(2)}% of the world's population`
);
console.log(
  `Mexico's population is ${mexicoPopulation.toFixed(2)}% of the world's population`
);

console.log("");

// Lecture 35
console.log("🦞 LECTURE 35");

// Arrow function
const calcAge3 = (birthYear) => {
  console.log("Arrow function");
  return 2023 - birthYear;
};
const age3 = calcAge3(1989);

console.log(age3);

console.log("");

// Lecture 35 - Assignment
console.log("🦀 LECTURE 35 - ASSIGNMENT");

console.log("");

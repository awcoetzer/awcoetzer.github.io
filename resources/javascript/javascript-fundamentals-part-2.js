"use strict";

/*
  Notes:
        Lecture: 🦞
        Lecture Challenge: 🦀
        Assignment: 🐟
        Coding Challenge: 🦑
*/

/*
  Lecture 32
*/ 
console.log("🦞 LECTURE 32");

console.log("'use strict';");

console.log("");

/*
  Lecture 33
*/ 
console.log("🦞 LECTURE 33");

//  Just logs this string to console

function logger() {
  console.log("Hello, my name is Andre");
}

logger();
logger();
logger();

const test = logger();
console.log(typeof test)

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

/*
  Lecture 33 - Assignment
*/ 
console.log("🦞 LECTURE 33 - ASSIGNMENT");

function describeCountry (country, population, capitalCity) {
  const myCountry = `${country} has ${population} million people and it's capital is ${capitalCity}`;
  return myCountry;
}

const bulgaria = describeCountry('Bulgaria', 7.4, 'Sofia');
const southAfrica = describeCountry('South Africa', 60, 'Pretoria, Bloemfontein and Cape Town');
const columbia = describeCountry('Columbia', 50, 'Bogota');

console.log(bulgaria);
console.log(southAfrica);
console.log(columbia);

console.log("");
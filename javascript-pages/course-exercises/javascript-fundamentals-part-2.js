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

// const burger = [
//   'Patty',
// ];

// console.log(burger);

// // To add an element to the end of an array
// burger.push('Bottom Bun');
// console.log(burger);

// // To add an element to the start of an array
// burger.unshift('Top Bun');
// console.log(burger);

// // Example 2

// // To remove an element to the end of an array
// burger.pop();
// console.log(burger);

// // To remove an element to the start of an array
// burger.shift();
// console.log(burger);

// // Example 3

// const findWaldo = [
//   'not Waldo',
//   'not Waldo',
//   'not Waldo',
//   'Waldo',
//   'not Waldo',
//   'not Waldo'
// ];

// // checking the index value of waldo
// console.log(findWaldo.indexOf('Waldo'));

// // checking if waldo is in the array
// console.log(findWaldo.includes('Waldo'));

console.log('');

//////////////////// Lecture 40 - Assignment ////////////////////
console.log('🦀 LECTURE 40 - ASSIGNMENT');

// const neighbours = [
//   'Canada',
//   'Mexico'
// ];
// console.log(neighbours);

// neighbours.push('Utopia');
// console.log(neighbours);

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes('Germany')) {
//   console.log('Probably not a European country.')
// }

// neighbours[neighbours.indexOf('Canada')] = 'Conodo';
// console.log(neighbours);

console.log('');


//////////////////// Coding Challenge - 2 ////////////////////
console.log('🦑 CODING CHALLENGE - 2');

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// };

// console.log(calcTip(100));

// const bills = [125, 555, 44];

// const tips = [
//   calcTip(bills[0]),
//   calcTip(bills[1]),
//   calcTip(bills[2])
// ];

// console.log(tips);

// const total = [
//   bills[0] + tips[0],
//   bills[1] + tips[1],
//   bills[2] + tips[2]
// ];

// console.log(total);

console.log('');


//////////////////// Lecture 42 ////////////////////
console.log('🦞 LECTURE 42');

// const firstName = 'Andre';
// const friends = ['Scott', 'Frank', 'Jack'];

// // The array version
// const andreArr = [
//   firstName,
//   'Coetzer',
//   33,
//   'Developer',
//   friends,
// ];

// // The object version
// const andreObj = {
//   firstName: firstName,
//   lastName: 'Coetzer',
//   age: 2023 - 1989,
//   job: 'Developer',
//   friends: friends
// };

// console.log(andreObj);
// console.log(andreObj.firstName);

console.log('');

//////////////////// Lecture 42 - Assignment ////////////////////
console.log('🦀 LECTURE 42 - ASSIGNMENT');

// const myCountry = {
//   country: 'Republic of Bulgaria',
//   capital: 'Sofia',
//   language: 'Bulgarian',
//   population: 7.4,
//   neighbours: [
//     'Greece',
//     'Republic of Macedonia',
//     'Romania',
//     'Serbia',
//     'Turkey'
//   ]
// };

// console.log(myCountry.country);

console.log('');

//////////////////// Lecture 43 ////////////////////
console.log('🦞 LECTURE 43');

// Example 1

// const firstName = 'Andre';
// const friends = ['Scott', 'Frank', 'Jack'];

// const andreObj = {
//   firstName: firstName,
//   lastName: 'Coetzer',
//   age: 2023 - 1989,
//   job: 'Developer',
//   friends: friends
// };

// // Dot notation
// console.log(andreObj.job);

// // Bracket notation
// console.log(andreObj['job']);

// // Brackets allow for expressions
// const nameKey = 'Name';

// console.log(andreObj['first' + nameKey]);
// console.log(andreObj['last' + nameKey]);

// // Example 2

// // const interestedIn = prompt('What would you like to know about Andre?, You can choose from firstName, lastName, age, job, friends');

// // console.log(andreObj.interestedIn) // Will result in undefined
// // console.log(andreObj[interestedIn]) // Will compute the value

// // if (andreObj[interestedIn]) {
// //   console.log(andreObj[interestedIn]);
// // } else {
// //   console.log('Unknown property');
// // };

// // Example 3

// andreObj.location = 'Bulgaria';
// andreObj['website'] = 'https://acoetzer.github.io';

// console.log(andreObj);

console.log('');

//////////////////// Lecture 43 - Challenge ////////////////////
console.log('🐟 LECTURE 43 - CHALLENGE');

// const firstName = 'Andre';
// const friends = ['Scott', 'Frank', 'Jack'];

// const andreObj = {
//   firstName: firstName,
//   lastName: 'Coetzer',
//   age: 2023 - 1989,
//   job: 'Developer',
//   friends: friends
// };

// console.log(`${andreObj.firstName} has ${andreObj.friends.length} friends and his best friend is ${andreObj.friends[0]}`);

console.log('');

//////////////////// Lecture 43 - Assignment ////////////////////
console.log('🦀 LECTURE 43 - ASSIGNMENT');

// const myCountry = {
//   country: 'Republic of Bulgaria',
//   capital: 'Sofia',
//   language: 'Bulgarian',
//   population: 7.4,
//   neighbours: [
//     'Greece',
//     'Republic of Macedonia',
//     'Romania',
//     'Serbia',
//     'Turkey'
//   ]
// };

// console.log(`The ${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

// console.log(myCountry.population)

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry['population'] -= 2;
// console.log(myCountry.population);

console.log('');

//////////////////// Lecture 44 ////////////////////
console.log('🦞 LECTURE 44');

// const firstName = 'Andre';
// const friends = ['Scott', 'Frank', 'Jack'];

// const andreObj = {
//   firstName: firstName,
//   lastName: 'Coetzer',
//   birthYear: 1989,
//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age
//   },
//   job: 'Developer',
//   friends: friends
// };

// andreObj.calcAge(); // Need to run the method first
// console.log(andreObj.age);

console.log('');

//////////////////// Lecture 44 - Challenge ////////////////////
console.log('🐟 LECTURE 44 - CHALLENGE');

// const firstName = 'Andre';
// const friends = ['Scott', 'Frank', 'Jack'];

// const andreObj = {
//   firstName: firstName,
//   lastName: 'Coetzer',
//   birthYear: 1989,
//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age
//   },
//   job: 'Developer',
//   friends: friends,
//   hasCooked: false,
//   getSummary: function () {
//     return `${this.firstName} is a ${this.age}-year-old ${this.job} who ${this.hasCooked ? 'has' : "has't"} cooked dinner today`;
//   }
// };

// andreObj.calcAge();
// console.log(andreObj.getSummary());

console.log('');

//////////////////// Lecture 44 - Assignment ////////////////////
console.log('🦀 LECTURE 44 - ASSIGNMENT');

// const myCountry = {
//   country: 'Republic of Bulgaria',
//   capital: 'Sofia',
//   language: 'Bulgarian',
//   population: 7.4,
//   neighbours: [
//     'Greece',
//     'Republic of Macedonia',
//     'Romania',
//     'Serbia',
//     'Turkey'
//   ],
//   describe: function () {
//     return `The ${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
//   },
//   checkIsland: function () {
//     this.isIsland = this.neighbours.length === 0 ? true : false;
//     return this.isIsland;
//   }
// };

// console.log(myCountry.describe())
// console.log(myCountry.checkIsland())

console.log('');

//////////////////// Coding Challenge - 3 ////////////////////
console.log('🦑 CODING CHALLENGE 3');

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69, 
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi
//   }
// };

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95, 
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi
//   }
// };

// mark.calcBMI()
// john.calcBMI()

// console.log(mark.bmi, john.bmi)

// const bmiCompare = function (x, y) {
//   if (x.bmi > y.bmi) {
//     return `${x.fullName}'s BMI(${x.bmi}) is higher than ${y.fullName}'s BMI(${y.bmi})`
//   } else {
//     return `${y.fullName}'s BMI(${y.bmi}) is higher than ${x.fullName}'s BMI(${x.bmi})`
//   }
// }

// console.log(bmiCompare(mark, john));

console.log('');

//////////////////// Lecture 46 ////////////////////
console.log('🦞 LECTURE 46');

// console.log('Incremental');
// // Incremental
// for (let i = 0; i <= 10; i++) {
//   console.log(`Iteration (${i})`);
// }

// console.log('');
// console.log('Decremental');
// // Decremental
// for (let i = 10; i >= 0; i--) {
//   console.log(`Iteration (${i})`);
// }

console.log('');

//////////////////// Lecture 46 - Assignment ////////////////////
console.log('🦀 LECTURE 46 - ASSIGNMENT');

// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// };

console.log('');

//////////////////// Lecture 47 ////////////////////
console.log('🦞 LECTURE 47');

// Example 1

// const simpleArray = [
//   'Text-1',
//   'Text-2',
//   'Text-3',
//   23,
//   true,
//   'Text-4',
//   1991,
//   false,
//   'Text-5'
// ];

// const simpleArray2 = [];

// for (let i = 0; i <= simpleArray.length; i++) {
//   console.log(`${simpleArray[i]} is a ${typeof simpleArray[i]}`);
//   simpleArray2.push(typeof simpleArray[i]);
// }

// console.log(simpleArray)
// console.log(simpleArray2)


// // Example 2
// const years = [1989, 1990, 1991, 1992];
// const age = [];

// for (let i = 0; i <= years.length; i++) {
//   age.push(2023 - years[i]);
// };

// console.log(age);

// // Example 3

// console.log('----- Continue example -----')
// for (let i = 0; i <= simpleArray.length; i++) {
  
//   if (typeof simpleArray[i] !== 'string') continue;
//   console.log(simpleArray[i], typeof simpleArray[i]);
// }

// // Example 4

// console.log('----- Break example -----')
// for (let i = 0; i <= simpleArray.length; i++) {
  
//   if (typeof simpleArray[i] === 'boolean') break;
//   console.log(simpleArray[i], typeof simpleArray[i]);
// }

console.log('');

//////////////////// Lecture 47 - Assignment ////////////////////
console.log('🦀 LECTURE 47 - ASSIGNMENT');

// const percentageOfWorld1 = function (population) {
//   return (population / 7900) * 100;
// }

// const populations = [7, 60, 320, 50];
// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3])
// ];
// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//   percentages2.push(percentageOfWorld1(populations[i]));
//   console.log(`Percentage 1: ${percentages[i]} Vs. Percentage 2: ${percentages2[i]}`)
// }

console.log('');

//////////////////// Lecture 48 ////////////////////
console.log('🦞 LECTURE 48');

// Example 1

// const myNumbers = [1, 2, 3, 4, 5];

// for (let i = myNumbers.length - 1; i >= 0; i--) {
//   console.log(`Index Number: ${i}, Array Value: ${myNumbers[i]}`);
// }

// // Example 2

// for (let i = 1; i <= 3; i++) {
//   console.log(`Exercise ${i}`);
//   for (let j = 1; j <= 2; j++) {
//     console.log(`   Exercise ${i}, Rep ${j}`)
//   }
// }

console.log('');

//////////////////// Lecture 48 - Assignment ////////////////////
console.log('🦀 LECTURE 48 - ASSIGNMENT');

// const listOfNeighbours = [
//   ['Canada', 'Mexico'], 
//   ['Spain'], 
//   ['Norway', 'Sweden', 'Russia']
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let j = 0; j < listOfNeighbours[i].length; j++) {
//     console.log(`${listOfNeighbours[i][j]}`);
//   }
// }

console.log('');

//////////////////// Lecture 49 ////////////////////
console.log('🦞 LECTURE 49');

// Example 1

let i = 0;

while (i <= 10) {
  console.log(`Loop (${i})`)
  i++
};

// Example 2

const diceMe = function (number) {
  let dice = Math.trunc(Math.random() * number) + 1;

  while (dice !== number) {
    console.log(`You Rolled a ${dice}`)
    dice = Math.trunc(Math.random() * number) + 1;

    if (dice === number) console.log(`Yay!, You rolled a ${dice}, Game Over`);
  }
}

diceMe(5);

console.log('');

//////////////////// Lecture 49 - Assignment ////////////////////
console.log('🦀 LECTURE 49 - ASSIGNMENT');

console.log('');

//////////////////// Coding Challenge - 4 ////////////////////
console.log('🦑 CODING CHALLENGE - 4');

console.log('');

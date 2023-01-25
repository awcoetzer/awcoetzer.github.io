'use strict';

//////////////////// Lecture 103 ////////////////////
console.log('LECTURE 103');

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Made up restaurant menu app
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Just Delicious',
  location: "74-5035 Queen Ka'ahumanu Hwy, Kailua-Kona, Hawaii",
  categories: [
    '- Seafood & Grill',
    '- Hawaiian BBQ & Grill',
    '- Hawaiian',
    '- Organic',
  ],
  starterMenu: [
    '- Garlic Bread',
    '- Bread Sticks',
    '- Hawaiian Salad',
    '- Garlic Snails',
    '- Hot Stone Muscles',
  ],
  mainMenu: [
    '- Pizza',
    '- Seafood Grill',
    '- Hawaiian Fried Rice & Seafood',
    '- Seafood Platter with Hawaiian Trio Sauce',
    '- Ocean Fish, Catch Of The Day',
  ],
  sidesMenu: [
    '- French Fries',
    '- Hawaiian Coleslaw',
    '- Hawaiian Macaroni Salad',
    '- Pineapple Rice',
    '- Hawaiian Rolls',
  ],
  order(starterIndex, mainIndex, sidesIndex) {
    return [
      this.starterMenu[starterIndex],
      this.mainMenu[mainIndex],
      this.sidesMenu[sidesIndex],
    ];
  },
  openingHours,
  orderDelivery({
    starterIndex = 1,
    mainIndex = 1,
    sidesIndex = 'X',
    time = '20:00',
    address = 'No address was added',
  }) {
    console.log(
      `Order Received! 
      ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]}, ${
        sidesIndex === 'X' ? 'NO SIDES' : this.sidesMenu[sidesIndex]
      } will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Your pasta is ready and includes ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(
      `Your ${mainIngredient} pizza is ready, with the optional ingredients ${otherIngredients} added`
    );
  },
};

// // Introduction to deconstructing arrays
// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log('--- creating a variable for each array index');
// console.log(a, b, c);

// console.log('--- Using the deconstruct syntax');
// const [x, y, z] = arr;
// console.log(x, y, z);

// // We don't need to select all values when deconstructing
// // const [first, second] = restaurant.categories;

// // We can even skip the second value
// console.log('--- Skipping a value');

// const [first, , third] = restaurant.categories;
// console.log(first, third);

// // Switching variables
// console.log('--- switching variables');

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Old way of switch variables using temp
// // const temp = main;
// // main = secondary;
// // secondary = temp

// // using deconstruction as a method of switching
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Unpacking a function into variable using deconstruction
// // const [starterMeal, mainMeal, sideMeal] = restaurant.order(0, 1, 0);
// // console.log(starterMeal, mainMeal, sideMeal);

// // deconstructing nested arrays
// const nested = [1, 'skip me', 3, [4, 5]];
// const [q, , w, [e, r]] = nested;
// console.log(q, w, e, r);

// // Assigning a default value
// const mysteryAPI = [8, 9];
// const [xx = 1, yy = 1, zz = 1] = mysteryAPI;
// console.log(xx, yy, zz);

// // Practice example, lets say we don't order a side dish
// const [starterMeal = 'X', mainMeal = 'X', sideMeal = 'X'] = restaurant.order(0, 1);
// console.log(starterMeal, mainMeal, sideMeal);

console.log('');

//////////////////// Lecture 104 ////////////////////
console.log('LECTURE 104');

// // Deconstructing an object
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // Changing the variable name
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Setting default values as well as changing the names
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// console.log(a, b);

// const obj = { a: 27, b: 34 };
// ({ a, b } = obj);
// console.log(a, b);

// // Deconstructing nested objects
// const {fri: {open: o, close: c}} = openingHours;
// console.log(`Opening time is at ${o}, Closing time is at ${c}`);

// // Using an object as an argument for a method, which will be deconstructed
// restaurant.orderDelivery({
//   time: '22:00',
//   address: 'Texes State',
//   starterIndex: 3,
//   mainIndex: 2,
// });

console.log('');

//////////////////// Lecture 105 ////////////////////
console.log('LECTURE 105');

// const arr = [3, 4, 5];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// // Using the spread operator inside a array literal
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// // Using the spread operator in functions
// console.log(...newArr);
// console.log(...restaurant.mainMenu);

// // Creating a new array built off of another, while adding to it
// const newMenu = [...restaurant.mainMenu, '- Grilled Cheese'];
// console.log(...newMenu);

// // Shallow copy of an array
// const mainMenuCopy = [...restaurant.mainMenu]
// console.log(mainMenuCopy);

// // Merging arrays
// const menuMerge = [...restaurant.starterMenu, ...restaurant.mainMenu, ...restaurant.sidesMenu];
// console.log(menuMerge);

// // Using the spread operator on strings
// const str =  'Andre';
// const letters = [...str, , 'C.']
// console.log(letters)

// // Spread operator using our restaurant example
// // const ingredients = [
// //   prompt('Lets make your pasta!, Whats your first Ingredient?'),
// //   prompt('Whats your second ingredient?'),
// //   prompt('Whats your third ingredient?'),
// // ];
// // console.log(ingredients);

// // restaurant.orderPasta(...ingredients)

// // Spread operator with objects
// const newRestaurant = {foundedIn: 1989, ...restaurant, founder: 'Hala Lulu'};
// console.log(restaurant);
// console.log(newRestaurant)

// // Coping is not pointing to same reference
// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Hala Lulu';
// console.log(restaurant.name, restaurantCopy.name)

console.log('');

//////////////////// Lecture 106 ////////////////////
console.log('LECTURE 106');

// const anArray = [1, 2, ...[3, 4]];

// // The rest operator in the deconstruction syntax
// const [a, b, ...otherNumbers] = anArray;
// console.log(a, b, otherNumbers);

// // Using both rest and spread operators
// const [pizza, seaFoodGrill, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, seaFoodGrill, otherFood);

// // Rest operator in objects
// const {sat: weekendHours, ...weekdayHours} = restaurant.openingHours;
// console.log(weekendHours, weekdayHours);

// // rest in functions
// function restAdd (...nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) sum += nums[i];
//   console.log(sum);
// }

// restAdd(1, 2);
// restAdd(2, 3, 5);
// restAdd(5, 5, 10, 30);
// restAdd(5, 2, 3, 5, 15, 10, 5, 2, 3, 50);

// // taking it one step further and using the spread operator in the function call
// const x = [5, 5, 10, 30, 50];
// restAdd(...x);

// // Using the rest operator in our restaurant example
// restaurant.orderPizza('pineapple', 'bacon', 'sour cream');

// // using the spread in combination with the rest param
// const pizzaIngredients = ['mushrooms', 'olives', 'spinach', 'pepperoni']
// restaurant.orderPizza(...pizzaIngredients);

console.log('');

//////////////////// Lecture 107 ////////////////////
console.log('LECTURE 107');

// // Short circuiting with OR
// console.log('---- OR Short Circuit Evaluation ----');
// console.log(3 || 'Andre');
// console.log('' || 'Andre');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// // Practical use case for OR
// restaurant.numGuests = 0; // This can cause an issue
// const guestOne = restaurant.numGuests ? restaurant.numGuests : 10;
// const guestTwo = restaurant.numGuests || 10;

// console.log(guestOne);
// console.log(guestTwo);

// console.log('---- AND Short Circuit Evaluation ----');

// console.log(0 && 'Andre');
// console.log('Jonas' && 'Andre');
// console.log('Hello' && 23 && null && '' && 'Andre');

// // Practical use case for AND
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Pepperoni', 'Basil', 'Feta');
// };

// restaurant.orderPizza && restaurant.orderPizza('Pepperoni', 'Basil', 'Feta');

console.log('');

//////////////////// Lecture 108 ////////////////////
console.log('LECTURE 108');

// // Practical use case for OR
// restaurant.numGuests = 0; // This can cause an issue
// const guestOne = restaurant.numGuests ? restaurant.numGuests : 10;
// const guestTwo = restaurant.numGuests || 10;

// console.log(guestOne);
// console.log(guestTwo);

// // Nullish coalescing operator (??)
// const guestThree = restaurant.numGuests ?? 10;
// console.log(guestThree);

console.log('');

//////////////////// Lecture 109 ////////////////////
console.log('LECTURE 109');

// const rest1 = {
//   name: 'Pizzaria Maria',
//   numGuests: 0,
// }

// const rest2 = {
//   name: 'Taco Taco',
//   owner: 'El Sanchez',
// }

// // // the logical OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// console.log(rest1)
// console.log(rest2)

// rest1.numGuests ||= 15;
// rest2.numGuests ||= 15;
// console.log(rest1)
// console.log(rest2)

// // the nullish assignment operator
// rest1.numGuests = rest1.numGuests ?? 15;
// rest2.numGuests = rest2.numGuests ?? 15;

// rest1.numGuests ??= 15;
// rest2.numGuests ??= 15;
// console.log(rest1)
// console.log(rest2)

// // the logical AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>'
// rest2.owner = rest2.owner && '<ANONYMOUS>'

// rest1.owner &&= '<ANONYMOUS>'
// rest2.owner &&= '<ANONYMOUS>'
// console.log(rest1);
// console.log(rest2);

console.log('');

//////////////////// Lecture 110 ////////////////////
console.log('LECTURE 110');
console.log('Coding Challenge One');

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...playerNames) {
    console.log(`${playerNames.length} goals scored`);
    const goals = playerNames.length;
    for (let i = 0; i < playerNames.length; i++) {
      console.log(playerNames[i]);
    }
  },
};

console.log('');
console.log('---- Task 1 ----');
const [playersOne, playersTwo] = game.players;
console.log(`Players One: ${playersOne}`);
console.log(`Players Two: ${playersTwo}`);

console.log('');
console.log('---- Task 2 ----');
const [gk, ...fieldPlayers] = playersOne;
console.log(`GoalKeeper is ${gk} and field players are`, fieldPlayers);

console.log('');
console.log('---- Task 3 ----');
const allPlayers = [...playersOne, ...playersTwo];
console.log('All players are ', allPlayers);

console.log('');
console.log('---- Task 4 ----');
const playersFinal = ['Thiago', 'Coutinho', ...playersOne, 'Perisic'];
console.log('The final team for Team One ', playersFinal);

console.log('');
console.log('---- Task 5 ----');
const {
  odds: { team1: teamOne, x: draw, team2: teamTwo },
} = game;
console.log(`Team 1: ${teamOne}, Draw: ${draw}, Team 2: ${teamTwo}`);

console.log('');
console.log('---- Task 6 ----');
// Part 1
game.printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');

console.log('');
game.printGoals('Lewandowski', 'Gnarby');

console.log('');
// Part 2
game.printGoals(...game.scored);

console.log('');
console.log('---- Task 7 ----');
teamOne < teamTwo && console.log('Team one is more likely to win');

console.log('');

//////////////////// Lecture 111 ////////////////////
console.log('LECTURE 111');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // The for-of loop
// for (const item of menu) console.log(item);

// // To get the index value
// for (const item of menu.entries()) {
//   console.log(item);
// }

// for (const [i, item] of menu.entries()) {
//   console.log(`${i + 1} ${item}`);
// }

console.log('');

//////////////////// Lecture 112 ////////////////////
console.log('LECTURE 112');

// const spices = {
//   driedFruit: ['Apples', 'Pears', 'Strawberry'],
//   spiceMix: ['cinnamon sticks', 'allspice berries', 'lemongrass'],
// };

// const tea = {
//   name: 'Lemon Tang',
//   spices,
//   isWaterBoiled: true,
//   addWater() {
//     if (this.isWaterBoiled)
//       console.log(
//         `${(this.isWaterBoiled &&= `Water is boiled, lets make some ${this.name} tea betch`)}`
//       );
//   },
// };
// tea.addWater();

console.log('');

//////////////////// Lecture 113 ////////////////////
console.log('LECTURE 113');

// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// } else {
//   console.log('Does not exist');
// }
// // The optional chaining operator
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // practical Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[days]?.open ?? 'closed';
//   console.log(`On ${day} we are open at ${open}`);
// }

// // Optional chaining with methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // Optional chaining with arrays
// const usersOne = [{ founder: 'Andre', email: 'learning@somewhere.com' }];
// console.log(usersOne[0]?.founder ?? 'User does not exist');

// const usersTwo = [{ name: 'Andre', email: 'learning@somewhere.com' }];
// console.log(usersTwo[0]?.founder ?? 'User does not exist');

// // This show we would have to write it without optional chaining
// if (usersOne.length > 0) console.log(usersOne[0].founder);
// else console.log('User does not exist');

console.log('');

//////////////////// Lecture 114 ////////////////////
console.log('LECTURE 114');

// // Iterating over objects
// for (const days of Object.keys(openingHours)) {
//   console.log(days);
// }

// // Iterating over object key/names
// const properties = Object.keys(openingHours);
// let openStr = `We are open on ${properties.length} days`;

// for (const day of properties) {
//   openStr += ` ${day}`;
// };
// console.log(openStr)

// // Iterating over object values
// const values = Object.values(openingHours);

// for (const {open, close} of values) console.log(open, close);

// // iterating over the object entries
// const entries = Object.entries(openingHours);

// for (const [keys, {open, close}] of entries) {
//   console.log(keys, open, close)
// }

console.log('');

//////////////////// Lecture 115 ////////////////////
console.log('LECTURE 115');
console.log('Coding Challenge Two');

// // Task 1
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// // Task 2
// const gameAverages = function () {
//   const odds = Object.values(game.odds);
//   let sum = 0;

//   for (const odd of odds) {
//     sum += odd;
//   }
//   sum /= odds.length;

//   return sum.toFixed(2)
// };
// gameAverages();

// console.log(gameAverages());

// // Task 3
// const printOdds = function () {
//   const odds = Object.entries(game.odds);

//   for (const [team, odd] of odds) {
//     const newStr = team === 'x' ? 'draw' : game[team];
//     console.log(`Odd of ${newStr}: ${odd} `)
//   }
// }
// printOdds()

// // Task 4
// const scorers = {};

// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : scorers[player] = 1;
// }

// console.log(scorers);

console.log('');

//////////////////// Lecture 116 ////////////////////
console.log('LECTURE 116');

// // creating a set
// const orderSet = new Set(['Pizza', 'Pasta', 'Risotto', 'Pizza', 'Pasta']);
// console.log(orderSet);
// console.log(new Set('Andre'));

// // Checking if an item exist, and the size
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.size);

// // Adding to a set
// orderSet.add('Garlic Bread');
// console.log(orderSet);

// // Clearing a set
// // orderSet.clear()
// // console.log(orderSet);

// // iterating over sets
// for (const order of orderSet) console.log(order)

// // Practical example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter', 'Chef'];
// // we wrap this in brackets and spread the set to turn it from set to array.
// const uniqueStaff = [...new Set(staff)]
// console.log(uniqueStaff)

// // If we just want the size of the set
// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter', 'Chef']).size);

console.log('');

//////////////////// Lecture 117 ////////////////////
console.log('LECTURE 117');

// creating a map
const rest = new Map();

// adding data to the map using set
rest.set('name', 'Classico Pizza');
rest.set(1, 'Italy');
rest.set(2, 'France');

// Chaining sets
rest.set('categories', ['Seafood', 'BBQ', 'Hawaiian', 'Organic',]).set('open', 11).set('close', 23).set(true, 'Yes, we are open').set(false, 'No, We are closed');
console.log(rest)

// To get values from maps using get
console.log(rest.get('name'));
console.log(rest.get(false));

// Working with boolean values
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// Checking for keys, the size and deleting elements
// checking for a key using has
console.log(rest.has('name'));

// deleting from a map
console.log(rest) // before
rest.delete(2)
console.log(rest) // after

// Checking the size
console.log(rest.size)

// using an array as a key
const arr = [1, 2];
// rest.set([1, 2], 'Hello There') This wont work
rest.set(arr, 'Hello There')

console.log(rest.get(arr));


console.log('');

//////////////////// Lecture 118 ////////////////////
console.log('LECTURE 118');

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'javaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Your answer: ${key} : ${value}`);
}

// let answer = Number(prompt("What's your answer?"));
let answer = 3;

// Challenge
console.log(question.get(answer === question.get('correct')));

console.log('');

//////////////////// Lecture 119 ////////////////////
console.log('LECTURE 119');

console.log('');

//////////////////// Lecture 120 ////////////////////
console.log('LECTURE 120');

console.log('');

//////////////////// Lecture 121 ////////////////////
console.log('LECTURE 121');

console.log('');

//////////////////// Lecture 122 ////////////////////
console.log('LECTURE 122');

console.log('');

//////////////////// Lecture 123 ////////////////////
console.log('LECTURE 123');

console.log('');

//////////////////// Lecture 124 ////////////////////
console.log('LECTURE 124');

console.log('');

//////////////////// Lecture 125 ////////////////////
console.log('LECTURE 125');

console.log('');

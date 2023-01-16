'use strict';

//////////////////// Lecture 103 ////////////////////
console.log('LECTURE 103');

// // Made up restaurant menu app
// const restaurant = {
//   name: 'Just Delicious',
//   location: "74-5035 Queen Ka'ahumanu Hwy, Kailua-Kona, Hawaii",
//   categories: [
//     'Seafood & Grill',
//     'Hawaiian BBQ & Grill',
//     'Hawaiian',
//     'Organic',
//   ],
//   starterMenu: [
//     'Garlic Bread',
//     'Bread Sticks',
//     'Hawaiian Salad',
//     'Garlic Snails',
//     'Hot Stone Muscles',
//   ],
//   mainMenu: [
//     'Pizza',
//     'Seafood Grill',
//     'Hawaiian Fried Rice & Seafood',
//     'Seafood Platter with Hawaiian Trio Sauce',
//     'Ocean Fish, Catch Of The Day',
//   ],
//   sidesMenu: [
//     'French Fries',
//     'Hawaiian Coleslaw',
//     'Hawaiian Macaroni Salad',
//     'Pineapple Rice',
//     'Hawaiian Rolls',
//   ],
//   order: function (starterIndex, mainIndex, sidesIndex) {
//     return [
//       this.starterMenu[starterIndex],
//       this.mainMenu[mainIndex],
//       this.sidesMenu[sidesIndex],
//     ];
//   },
// };

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

console.log('');

//////////////////// Lecture 105 ////////////////////
console.log('LECTURE 105');

console.log('');

//////////////////// Lecture 106 ////////////////////
console.log('LECTURE 106');

console.log('');

//////////////////// Lecture 107 ////////////////////
console.log('LECTURE 107');

console.log('');

//////////////////// Lecture 108 ////////////////////
console.log('LECTURE 108');

console.log('');

//////////////////// Lecture 109 ////////////////////
console.log('LECTURE 109');

console.log('');

//////////////////// Lecture 110 ////////////////////
console.log('LECTURE 110');

console.log('');

//////////////////// Lecture 111 ////////////////////
console.log('LECTURE 111');

console.log('');

//////////////////// Lecture 112 ////////////////////
console.log('LECTURE 112');

console.log('');

//////////////////// Lecture 113 ////////////////////
console.log('LECTURE 113');

console.log('');

//////////////////// Lecture 114 ////////////////////
console.log('LECTURE 114');

console.log('');

//////////////////// Lecture 115 ////////////////////
console.log('LECTURE 115');

console.log('');

//////////////////// Lecture 116 ////////////////////
console.log('LECTURE 116');

console.log('');

//////////////////// Lecture 117 ////////////////////
console.log('LECTURE 117');

console.log('');

//////////////////// Lecture 118 ////////////////////
console.log('LECTURE 118');

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

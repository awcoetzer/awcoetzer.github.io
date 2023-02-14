'use strict';

//////////////////// Lecture 128 ////////////////////
console.log('LECTURE 128');

// Default parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  // Old way of setting default parameters
  // numPassenger = numPassenger || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassenger,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 1, 499);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 399);

console.log('');

//////////////////// Lecture 129 ////////////////////
console.log('LECTURE 129');

console.log('');

//////////////////// Lecture 130 ////////////////////
console.log('LECTURE 130');

console.log('');

//////////////////// Lecture 131 ////////////////////
console.log('LECTURE 131');

console.log('');

//////////////////// Lecture 132 ////////////////////
console.log('LECTURE 132');

console.log('');

//////////////////// Lecture 133 ////////////////////
console.log('LECTURE 133');

console.log('');

//////////////////// Lecture 134 ////////////////////
console.log('LECTURE 134');

console.log('');

//////////////////// Lecture 135 ////////////////////
console.log('LECTURE 135');

console.log('');

//////////////////// Lecture 136 ////////////////////
console.log('LECTURE 136');

console.log('');

//////////////////// Lecture 137 ////////////////////
console.log('LECTURE 137');

console.log('');

//////////////////// Lecture 138 ////////////////////
console.log('LECTURE 138');

console.log('');

//////////////////// Lecture 139 ////////////////////
console.log('LECTURE 139');

console.log('');

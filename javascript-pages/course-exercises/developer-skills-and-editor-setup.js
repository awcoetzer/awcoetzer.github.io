'use strict';

//////////////////// Lecture 59 ////////////////////
console.log('🦞 LECTURE 59');

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [-3, -2, -6, -1, 'error'];
const temperatures3 = ['error', -3, -2, -6, -1]; // This will result in a bug


const tempAmplitude = function (arrOne, arrTwo) {
  const arr = arrOne.concat(arrTwo);

  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const curTemp = arr[i];

    if (typeof curTemp !== 'number') {
      continue;
    } else if (curTemp > max) {
      max = curTemp;
    } else if (curTemp < min) {
      min = curTemp;
    }
  }

  console.log(max, min);

  let amplitude = max - min;
  return `Todays amplitude was ${amplitude}`;
};

console.log(tempAmplitude(temperatures, temperatures2));
console.log('');

//////////////////// Lecture 61 ////////////////////
console.log('🦞 LECTURE 61');

// Bug inducing code
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'Celsius',
    // value: prompt('Degree Celsius')
    value: '10',
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

// Identify, Find and Fixing the code
const measureKelvin2 = function () {
  const measurement = {
    type: 'temp',
    unit: 'Celsius',
    // value: parseInt(prompt('Degree Celsius'))
    value: 10,
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin2());

console.log('');

//////////////////// Coding challenge - 1 ////////////////////
console.log('🦑 CODING CHALLENGE - 1');

const maxTemps1 = [17, 21, 23];
const maxTemps2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let logTemp = '';

  for (let i = 0; i < arr.length; i++) {
    const curTemp = arr[i];
    logTemp += `... ${curTemp}°C in ${i + 1} days `;
  }

  return logTemp;
};

console.log(`${printForecast(maxTemps1)}...`);
console.log(`${printForecast(maxTemps2)}...`);

console.log('');
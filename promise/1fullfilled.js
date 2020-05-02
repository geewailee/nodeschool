// Create a promise. Have it fulfilled with a value of 'FULFILLED!' in
// executor after a delay of 300ms, using setTimeout.

// Then, print the contents of the promise after it has been fulfilled by passing
// console.log to then.

"use strict";

let promise = new Promise(function (fulfill, reject) {
  // Your solution here

  //   Have it fulfilled with a value of 'FULFILLED!'
  //   after a delaey of 300 ms
  setTimeout(fulfill("FULFILLED!"), 300);
});

// Your solution here
promise.then(function (result) {
  // Then, print the contents of the promise after it has been fulfilled
  console.log(result);
});

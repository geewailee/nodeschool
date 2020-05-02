// In this lesson, we are going to prove to ourselves that promises are always
// asynchronous.

// First, create a promise using the Promise constructor.

// In the promise’s executor, immediately fulfill the promise with a value of
// 'PROMISE VALUE'.

// After the creation of the promise, pass console.log as the success handler to
// the promise.

// Finally, print out “MAIN PROGRAM” with console.log.

let promise = new Promise((fullfill, reject) => {
  fullfill("PROMISE VALUE");
});
promise.then(console.log);
console.log("MAIN PROGRAM");

// If the execution of promise is synchronous, the value of the promise is already
// known after its construction. The console.log passed into then would then
// be executed as soon as the then is called.

// However, if your script is successful, you should see “MAIN PROGRAM” before
// “PROMISE VALUE”.

// This shows you that despite the promise being resolved synchronously, the
// provided function is not executed until the next turn of the event loop.

// Official solution

// ("use strict");

// var promise = new Promise(function (fulfill, reject) {
//   fulfill("PROMISE VALUE");
// });

// // At this point, the value of promise is already known.

// // If promise is not always asynchronous, console.log would be called with
// // 'PROMISE VALUE' here. This is not the case.

// promise.then(console.log);

// console.log("MAIN PROGRAM");

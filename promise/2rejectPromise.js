// Create a promise that after a delay of 300ms, rejects with an Error object.
// The Error object should be constructed with parameter 'REJECTED!', which is
// the textual message of the error.

// Create a function onReject to print error.message using console.log. Pass
// this function as a rejection handler to the then method of your promise.

var promise = new Promise(function (fulfill, reject) {
  // Your solution here

  // delay after 300ms, rejects an error object with "REJECTED!"
  setTimeout(reject("REJECTED!"), 300);
});

// onReject prints error.message using console.log
function onReject(error) {
  // Your solution here
  console.log(error.message);
}

// Your solution here
// pass onReject as a rejection handler to the "then" method of your promise
promise.then(undefined, (error) => onReject(error));

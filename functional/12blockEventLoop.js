// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Timers

// Modify the recursive repeat function provided in the boilerplate,
// such that it does not block the event loop (i.e. Timers and IO handlers can fire).
// This necessarily requires repeat to be asynchronous.

// A timeout is queued to fire after 100 milliseconds,
// which will print the results of the test and exit the process.

// repeat should release control of the event loop to allow the timeout
// to interrupt before all of the operations complete.

// Try to perform as many operations as you can before the timeout fires!

function repeat(operation, num) {
  // modify this so it can be interrupted
  if (num <= 0) {
    return;
  }
  operation();
  if (num % 10 === 0) {
    setTimeout(function () {
      repeat(operation, --num);
    }, 1);
  } else {
    repeat(operation, --num);
  }
}

module.exports = repeat;

// If your program takes a long time to run, something is probably wrong.
// Use Control - C to kill the node process.

// function operation() {
//     for (var i = 0; i < 1000000; i++) {
//       // burn some CPU cycles
//     }
//     // count how many times this function was called
//     count++
//   }

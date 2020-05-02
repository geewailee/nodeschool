// Use Function#bind to implement a logging function that allows you to namespace messages.

// Your implementation should take a namespace string,
// and return a function that prints messages to the console with the namespace prepended.

// Make sure all arguments passed to the returned logging function are printed.

//  Print the output to the console directly

// ## Arguments

//   * namespace: a String to prepend to each message passed to the returned function.

// ## Example

// var info = logger("INFO:");
// info("this is an info message");
// // INFO: this is an info message

// var warn = logger("WARN:");
// warn("this is a warning message", "with more info");
// // WARN: this is a warning message with more info

module.exports = function (namespace) {
  return console.log.bind(console, namespace);
};

// without bind
// function logger(namespace) {
//   return function () {
//     console.log.apply(console, [namespace].concat(slice.call(arguments)));
//   };
// }

// function.bind(this, arg1, arg2, arg3...)

// Bind returns a copy of the function with the supplied this and the arguments.

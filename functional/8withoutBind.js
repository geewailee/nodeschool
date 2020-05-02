// Use partial application to create a function that fixes the first argument to console.log.
// i.e. Implement a logging function that prepends a namespace string to its output.

// Your implementation should take a namespace String and
// return a function that prints messages to the console with the namespace prepended.

// You should use Function#apply to implement the partial application.

// Make sure all arguments passed to the returned logging function are printed.

var slice = Array.prototype.slice;

// function logger(namespace) {
//   //   console.log(`\ntype of ${typeof namespace}`);
//   //   console.log(`namespace ${namespace}`);

//   //   let args = [...arguments];
//   //   return console.log(args);
//   let firstArg = namespace;
//   function log(message) {
//     // console.log(`message ${message}`);

//     console.log(firstArg, ...arguments);
//   }

//   // that prints messages to the console with namespace provided
//   return log;
// }

function logger(namespace) {
  return function () {
    console.log.apply(console, [namespace].concat(slice.call(arguments)));
  };
}

module.exports = logger;

// Examples
// var info = logger('INFO:')
// info('this is an info message')
// // INFO: this is an info message

// var warn = logger('WARN:')
// warn('this is a warning message', 'with more info')
// // WARN: this is a warning message with more info

// console.log(firstArg + message);

// ACTUAL                                 EXPECTED
// ────────────────────────────────────────────────────────────────────────────────

//    "INFO:Quis"                         !=    "INFO: Quis proident excepteur laboris nisi fugiat esse occaecat occaecat nulla et magna Lorem cillum."
//    "WARN:Nisi"                         !=    "WARN: Nisi adipisicing cillum aute et non."
//    "INFO:Magna"                        !=    "INFO: Magna ex occaecat pariatur dolor sint duis sunt adipisicing."
//    "WARN:Elit"                         !=    "WARN: Elit aliqua adipisicing sint consequat eu deserunt pariatur eu pariatur consequat ipsum."
//    "INFO:Ipsum"                        !=    "INFO: Ipsum ad ullamco non adipisicing nisi voluptate."
//    "WARN:Mollit"                       !=    "WARN: Mollit non veniam occaecat ex nulla sint ipsum exercitation nisi voluptate."
//    "INFO:Quis"                         !=    "INFO: Quis culpa eu occaecat duis magna aute nostrud ipsum."
//    "WARN:Irure"                        !=    "WARN: Irure do excepteur aliqua qui laboris Lorem in aliquip aliquip laboris."
//    ""                                  ==    ""

// ────────────────────────────────────────────────────────────────────────────────

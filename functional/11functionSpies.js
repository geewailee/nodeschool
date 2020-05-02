// Override a specified method of an object with new functionality
//  while still maintaining all of the old behaviour.

// Create a spy that keeps track of how many times a function is called.

// Target = an object
//      containing this.method()

// method = string
//      the name of the method in "target" to spy on

function Spy(target, method) {
  // SOLUTION GOES HERE
  //   console.log(`typeof target ${typeof target}`); // object
  //   console.log(target); // { test: [Function: test] }
  //   console.log(`method ${method}`); //test
  //   console.log(typeof target[method]); // function
  //   console.log(typeof target[method]);
  //   [Function: apply]
  //   [Function: test]
  //   return func;

  //   let args = [...arguments];
  //   console.log(`args ${args}`);

  // Override a specified method of an object with new functionality
  //  while still maintaining all of the old behaviour.

  //   use apply to....
  // make sure you are passing all the arguments
  // check the functions this
  //   return target.method.apply.reduce((acc, cur) => {
  //     if (Object.hasOwnProperty(method)) {
  //       acc++;
  //     }
  //     return acc;
  //   }, 0);

  var originalFunction = target[method];

  // use an object so we can pass by reference, not value
  // i.e. we can return result, but update count from this scope
  var result = {
    count: 0,
  };

  // replace method with spy method
  target[method] = function () {
    result.count++; // track function was called
    return originalFunction.apply(this, arguments); // invoke original function
  };

  return result;
}

module.exports = Spy;

// Functions have context, input and output. Make sure you consider the context,
// input to *and output from* the function you are spying on.

// var spy = Spy(console, "error");

// console.error("calling console.error");
// console.error("calling console.error");
// console.error("calling console.error");

// console.log(spy.count); // 3

//

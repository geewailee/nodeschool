// function toUpperArray(items) {
//   // end condition
//   if (!items.length) return [];

//   // item to operate on
//   var head = items[0];

//   // perform action
//   head = head.toUpperCase();

//   // next
//   var tail = items.slice(1);

//   // recursive step
//   return [head].concat(toUpperArray(tail));
// }

// console.log(toUpperArray(["hello", "world"]));
// => ['HELLO', 'WORLD']

// Implement Array#reduce using recursion.

// To test your reduction works correctly we will use your reduce
// implementation to execute our solution to the previous basic_reduce problem.
// i.e. your reduce function will be passed an array of words, and a function,
// and an initial value which will return an object containing the counts
// for each word found in the array.

// You don't need to implement this functionality,
// it will be supplied to your reduce implementation.

// For simplicity, your implementation of reduce need not replicate
// the behaviour of a reduce missing an initial value.
// You may assume the initial value will always be supplied.

// boilerplate
function reduce(arr, fn, initial) {
  console.log(`\narr ${arr}`);
  console.log(`\nfn ${fn}`);
  console.log(`\ninitial ${initial}`);

  // what is the end condition?

  // your reduce implementation to execute our solution to the previous problem
  // my version of reduce.js

  return arr.reduce(fn, initial);
  // fn: Function to use as the reduction step.
  // Like regular Array#reduce,
  // this function must be passed previousValue, currentValue, index
  //   and the array we're iterating over.

  // will return an object containing the counts
  // for each word found in the array.
}

module.exports = reduce;

// fn function(acc, curr) {
//   acc[curr] = ++acc[curr] || 1
//   return acc
// }

// fn function(prev, curr) {
//   prev[curr] = ++prev[curr] || 1
//   return prev
// }

// function countWords(arr) {
//   return arr.reduce(function(countMap, word) {
//     countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
//     return countMap
//   }, {}) // second argument to reduce initialises countMap to {}
// }

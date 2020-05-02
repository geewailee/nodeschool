// Given an Array of strings, use Array#reduce to create an object that contains the
// number of times each string occured in the array.
// Return the object directly (no need to console.log).

function countWords(inputWords) {
  // SOLUTION GOES HERE
  return inputWords.reduce((accumulator, item) => {
    // check if item is found in object as key
    accumulator[item] = ++accumulator[item] || 1;
    return accumulator;
  }, {});
}

module.exports = countWords;
/*
  function countWords(arr) {
    return arr.reduce(function(countMap, word) {
      countMap[word] = ++countMap[word] || 1 // increment or initialize to 1    
      return countMap
    }, {}) // second argument to reduce initialises countMap to {}
  }
  
  module.exports = countWords
  */

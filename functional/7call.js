// Write a function duckCount that returns the number of arguments passed to it
// which have a property 'quack' defined directly on them.
// Do not match values inherited from prototypes.

// Example:

//     var notDuck = Object.create({quack: true})
//     var duck = {quack: true}
//     duckCount(duck, notDuck) // 1

function duckCount() {
  // SOLUTION GOES HERE
  //   console.log([...arguments]);
  return [...arguments].reduce((acc, obj) => {
    for (const key in obj) {
      //   if (Object.prototype.hasOwnProperty(obj, "quack")) {
      //   console.log(`key ${key}`);
      if (key === "quack") {
        acc++;
      }
    }
    return acc;
  }, 0);
}

module.exports = duckCount;

// Official Solution
// function duckCount() {
//     return Array.prototype.slice.call(arguments).filter(function(obj) {
//       return Object.prototype.hasOwnProperty.call(obj, 'quack')
//     }).length
//   }

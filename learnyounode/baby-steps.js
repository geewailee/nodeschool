// Write a program that accepts one or more numbers as command-line arguments
// and prints the sum of those numbers to the console (stdout).
let sum = 0;
let array = process.argv;
// console.log("");

for (let i = 2; i < array.length; i++) {
  //   console.log("i" + i);

  //   console.log(`array[i] ${array[i]}`);
  sum += Number(array[i]);
  //   console.log(`sum ${sum}`);
  //   console.log("");
}
// console.log(`final sum ${sum}`);
console.log(`${sum}`);

/*

node baby-steps.js

[
  '/usr/local/Cellar/node/13.12.0/bin/node',
  '/Users/geewai/code/sandboxDos/nodeschool/learnyounode/baby-steps.js'
]

node baby-steps.js 1 2 3

[
  '/usr/local/Cellar/node/13.12.0/bin/node',
  '/Users/geewai/code/sandboxDos/nodeschool/learnyounode/baby-steps.js',
  '1',
  '2',
  '3'
]

*/

/*

To use your new module in your original program file (make-it-modular.js),  
  use the require() call in the same way that you require('fs') to load the fs module. 

The only difference is that for local modules must be prefixed with './'. 
So, if your file is named mymodule.js then: 

  const mymodule = require('./mymodule.js')  

The '.js' is optional here and you will often see it omitted.  

You now have the module.exports object in your module assigned to the mymodule variable. 

Since you are exporting a single function, mymodule is a function you can call!  

Also keep in mind that it is idiomatic to check for errors
 and do early-returns within callback functions:  

*/

const myModule = require("./myModule.js");

const directory = process.argv[2];
const extension = process.argv[3];

myModule(directory, extension, (err, filteredList) => {
  if (err) return console.error(err);

  filteredList.forEach((file) => {
    console.log(file);
  });
});

// Official Solution

// const filterFn = require("./solution_filter.js");
// const dir = process.argv[2];
// const filterStr = process.argv[3];

// filterFn(dir, filterStr, function (err, list) {
//   if (err) {
//     return console.error("There was an error:", err);
//   }

//   list.forEach(function (file) {
//     console.log(file);
//   });
// });

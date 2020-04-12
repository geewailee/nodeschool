/*

You must write a module file (mymodule.js) to do most of the work. 

The module must export a single function that takes three arguments in this order: 

  the directory name, 
  the filename extension string,
  and your callback function,  

Don't alter the filename extension string in any way before passing it to your module.  

The callback function must be called using the idiomatic node(err, data) convention. 

This convention stipulates that unless there's an error, 
  the first argument passed to the callback will be null, 
  and the second will be your data. 

In this exercise, the data will be your filtered list of files, as an Array. 

If you receive an error, e.g. from your call to fs.readdir(), 
  the callback must be called with the error as the first and only argument.

You must not print directly to the console from your module file, only from your original program.  
  
In the case of an error bubbling up to your original program file, simply  
check for it and print an informative message to the console.  
  
These four things are the contract that your module must follow.  
  
  1. Export a single function that takes exactly the arguments described.  
  2. Call the callback exactly once with an error or some data as described.  
  3. Don't change anything else, like global variables or stdout.  
  4. Handle all the errors that may occur and pass them to the callback.  
  
The benefit of having a contract is that your module can be used by anyone who expects this contract. 
  So your module could be used by anyone else who does learnyounode, or the verifier, and just work.  


## HINTS

Create a new module by creating a new file (mymodule.js) that just contains your directory reading and filtering function. 

To define a single function export, 
  you assign your function to the module.exports object, 
  overwriting what is already there:

  module.exports = function (args) { ... }  
   
  Or you can use a named function and assign the name.
*/

/* 
This is the module file that does most of the work. 
Just contains directory reading and filtering function.

 */

// const fs = require("fs");
// const path = require("path");

// // 2. Call the callback exactly once with an error or some data as described.
// // 3. Don't change anything else, like global variables or stdout.
// // 4. Handle all the errors that may occur and pass them to the callback.

// module.exports = (dir, ext, callback) => {
//   ext = `.${ext}`;
//   fs.readdir(dir, (err, lists) => {
//     if (err) return callback(err);

//     const filtered = lists.filter((file) => {
//       return path.extname(file) === ext;
//     });
//     return callback(null, filtered);
//   });
// };

/*
Your additional module file [mymodule.js] exports a function that takes
 fewer than three arguments. 
 
 You must accept a directory, a filter and a callback.
 */

// Official Solution
const fs = require("fs");
const path = require("path");

module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err);
    }

    list = list.filter(function (file) {
      return path.extname(file) === "." + filterStr;
    });

    callback(null, list);
  });
};

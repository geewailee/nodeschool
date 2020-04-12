/*
Write a program that uses a single asynchronous filesystem operation to  
read a file and print the number of newlines it contains to the console  
(stdout), similar to running cat file | wc -l.  
  
The full path to the file to read will be provided as the first  
command-line argument. 
*/

const fs = require("fs");
let file = fs.readFile(process.argv[2], "utf8", (err, data) => {
  if (err) throw err;
  //   console.log(`typeof ${typeof data}`);
  //   console.log(`data`);
  //   console.log(`${data}`);

  //   console.log("\n");

  let array = data.split("\n");
  //   console.log(`${array}`);
  //   console.log(array);
  console.log(array.length - 1);
});

/*
// macOS, Linux, and Windows
fs.readFile('<directory>', (err, data) => {
  // => [Error: EISDIR: illegal operation on a directory, read <directory>]
});
*/
// console.log(typeof file);

// console.log(`file ${file}`);

// let fileString = file.toString();
// console.log(fileString);
// let splitFileString = file.split("");
// console.log(splitFileString);
// let arrayLength = splitFileString.length;
// console.log(arrayLength - 1);

/*
  Instead of fs.readFileSync() you will want to use fs.readFile()
  
  instead of using the return value of this method 

  you need to collect the value from a callback function  
  that you pass in as the second argument. 



  you can check if an error occurred by checking whether the first  
  argument is truthy

    If there is no error, you should have your Buffer  
    object as the second argument

    As with readFile(), you can supply 'utf8' as the second argument 
        and put the callback as the third argument and you  
        will get a String instead of a Buffer.

*/

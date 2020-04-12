/* 
Create a program that prints a list of files in a given directory,  
filtered by the extension of the files.

You will be provided a directory name as the first argument to your program 
(e.g. '/path/to/dir/') and a file extension to filter by as the second argument. 

if you get 'txt' as the second argument then you will need to  
filter the list to only files that end with .txt. Note that the second  
argument will not come prefixed with a '.'.  

Keep in mind that the first arguments of your program are not the first  
values of the process.argv array, as the first two values are reserved for  
system info by Node.  

The list of files should be printed to the console, one file per line. You  
must use asynchronous I/O.  
  
*/

const fs = require("fs");
const path = require("path");

// let arr = process.argv.forEach(el => {
//   console.log(`${el}`);
// });

let name = "." + process.argv[3];
// console.log(`name ${name}`);

// if files end in .txt,
// filter the list to only files that end with .txt
fs.readdir(process.argv[2], "utf8", (err, list) => {
  if (err) throw err;

  // filter the list to only files that end with name
  // the list of files should be printed one file per line
  //   for (let i = 0; i < list.length; i++) {
  //     if (path.extname(list[i]) == name) {
  //       console.log(list[i]);
  //     }
  //   }
  list.forEach(el => {
    // console.log(`\nel ${el}`);
    // console.log(`name ${name}`);
    // console.log(`path.extname(el) ${path.extname(el)}`);

    if (path.extname(el) == name) {
      //   console.log(true);

      console.log(el);
    }
  });
});

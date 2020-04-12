/*
Write a program that 

uses a single synchronous filesystem operation to read a file and 
print the number of newlines (\n) it contains to the console (stdout), 
  similar to running cat file | wc -l.  
   
The full path to the file to read will be provided as the  
  first command-line argument (i.e., process.argv[2]). 
  You do not need to make your own test file.
*/

/*
read file using 

process.argv[2] 

test by printing out contents first

use single synchronous filesystem operation

    const fs = require('fs')

prints the number of newlines(/n) it contains to the console


use fs.readFileSync('/path/to/file')

returns buffer object 
    containing contents of the file

buffer objects can be converted to strings by
    toString() 

    const str = buf.toString()

split() into an array of substrings 
    '\n' can be used as a delimiter

the test file does not have a ('\n') at the end of the last line
so, you'll end up with an array that has one more element than
    the number of newlines
 */
// console.log("");

const fs = require("fs");
let file = fs.readFileSync(process.argv[2]);

// at this point, we have the buffer file
// it didn't split

// console.log(`typeof ${typeof file}`); // object
// console.log(file);

let fileString = file.toString();
// console.log(fileString);
let splitFileString = fileString.split("\n");
// console.log(splitFileString);
let arrayLength = splitFileString.length;
console.log(arrayLength - 1);

// let keyArray = Object.keys(file);
// let arrayLength = keyArray.length;
// console.log(`arrayLength ${arrayLength}`);

// let bytes = arrayLength - 50;
// console.log(bytes);

/*
for (const key in file) {
  console.log(file.key);
}
console.log(file);

let splitFile = file.split(" ");
let length = splitFile.length();
let half = length / 2;
let final = half - 1;
// console.log(final);
*/

// console.log("");

/*
let file = fs.readFileSync(process.argv[2]); 
<Buffer 12268  more bytes>

let keyArray = Object.keys(file);
let arrayLength = keyArray.length;
arrayLength 12318

let file = fs.readFileSync(process.argv[2]); 
<Buffer 42 75 69 6c 74 20 6c 69 6b 65 20 61 20 72 6f 74 74 65 6e 20 
70 69 65 63 65 20 6f 66 20 70 69 73 73 20 61 73 20 73 74 61 6e 64 73 
20 6f 75 74 20 6c 69 ... 12989 more bytes>

let keyArray = Object.keys(file);
let arrayLength = keyArray.length;
arrayLength 13039


9887
readBigUInt64LE
readBigUInt64BE
readBigInt64LE
readBigInt64BE
writeBigUInt64LE

<Buffer 46 6c 61 74 20 6f 75 74 20 6c 69 6b 65 20 61 20 62 6f 67 61 
6e 20 68 6f 77 20 73 74 61 6e 64 73 20 6f 75 74 20 6c 69 6b 65 20 61 
20 72 6f 61 64 69 65 ... 9838 more bytes>


/var/folders/q_/1b4hgsdn2yb8pt3sp22dp14h0000gn/T/_learnyounode_9047.txt



learnyounode run my-first-io.js
[
  '/usr/local/Cellar/node/13.12.0/bin/node',
  '/Users/geewai/code/sandboxDos/nodeschool/learnyounode/my-first-io.js',
  '/var/folders/q_/1b4hgsdn2yb8pt3sp22dp14h0000gn/T/_learnyounode_9012.txt'
]
 */

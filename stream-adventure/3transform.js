// // A transform stream takes input data and applies an operation to the data to
// // produce the output data.

// // Create a through stream with a `write` and `end` function:

// let through = require("through2");
// let stream = through(write, end);

// // The `write` function is called for every buffer of available input:

// function write(buffer, encoding, next) {
//   // ...
// }

// // and the `end` function is called when there is no more data:

// function end() {
//   // ...
// }

// // Inside the write function, call `this.push()` to produce output data and call
// // `next()` when you're ready to receive the next chunk:

// function write(buffer, encoding, next) {
//   this.push("I got some data: " + buffer + "\n");
//   next();
// }

// // and call `done()` to finish the output:

// function end(done) {
//   done();
// }

// `write` and `end` are both optional.

// If `write` is not specified, the default implementation passes the input data to
// the output unmodified.

// If `end` is not specified, the default implementation calls `this.push(null)`
// to close the output side when the input side ends.

// Make sure to pipe `process.stdin` into your transform stream
// and pipe your transform stream into `process.stdout`, like this:

// process.stdin.pipe(stream).pipe(process.stdout);

// To convert a buffer to a string, call `buffer.toString()`.

// Convert data from `process.stdin` to upper-case data on `process.stdout`
// using the `through2` module.

let through = require("through2");
// stream processes through
let stream = through(write, end);

// write is the input to the stream
function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

// end provides the output
function end(done) {
  done();
}

process.stdin.pipe(stream).pipe(process.stdout);

// Here is the reference solution:

var through = require("through2");
var tr = through(function (buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
});
process.stdin.pipe(tr).pipe(process.stdout);

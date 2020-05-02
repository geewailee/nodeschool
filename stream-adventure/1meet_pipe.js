// You will get a file as the first argument to your program (process.argv[2]).

// Use `fs.createReadStream()` to pipe the given file to `process.stdout`.

// `fs.createReadStream()` takes a file as an argument and returns a readable
// stream that you can call `.pipe()` on. Here's a readable stream that pipes its
// data to `process.stderr`:

let fs = require("fs");
fs.createReadStream(process.argv[2]).pipe(process.stdout);

// Your program is basically the same idea, but instead of `'data.txt'`, the
// filename comes from `process.argv[2]` and you should pipe to stdout, not stderr.

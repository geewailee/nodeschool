// write HTTP Server

// through2-map package offers the simplest API
// allows you to create a transform stream using a single function
// takes a chunk of data, and returns a chunk of data

const map = require("through2-map");
const http = require("http");

// inStream
//   .pipe(
//     map(function (chunk) {
//       return chunk.toString().split("").reverse.join("");
//     })
//   )
//   .pipe(outStream);

const server = http.createServer((req, res) => {
  //   console.log(req.method); //POST

  // // receives only POST requests
  if (req.method == "POST") {
    // console.log(`POST true`);
    req
      .pipe(
        map(function (chunk) {
          return chunk.toString().toUpperCase();
        })
      )
      .pipe(res);
  }
});

server.listen(process.argv[2]);

// server should listen on the port provided by the first arg

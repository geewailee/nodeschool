const http = require("http");
const fs = require("fs");
// write an http server

// request fetches properties
// such as header adn query-string from the request

// response sends data to the client
// both header and body

http
  .createServer((req, res) => {
    // serves the same text file for each received request

    // stream the file contents to the response
    // create a stream representing the file you are given as a CL argument
    // returns a stream object which you can use
    let readStream = fs.createReadStream(process.argv[3]);

    readStream.on("open", () => {
      readStream.pipe(res);
      // src.pipe(dst);
      // pipes data from src stream to dst stream
      // connects filesystem stream with an HTTP response stream
    });
  })
  .listen(process.argv[2]);

// server should listen on the port provided by the first argument
// server.listen(process.argv[2]);

// src.pipe(dst); is the same as saying source.pipe(destination);
// which is the same as saying fileStream.pipe(httpResponseStream);

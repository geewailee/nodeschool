/*
check for the same function multiple times with different inputs
    wihtout caring about the return data
    to check if any error is thrown


2 urls for as the first and secon CL arguments

2 get requests, one for each URL, 
    log any errors
*/

let http = require("http");
let async = require("async");

async.each(
  process.argv.slice(2),
  function (item, done) {
    http
      .get(item, function (res) {
        res.on("data", function (chunk) {});
        res.on("end", function () {
          done(null);
        });
      })
      .on("error", function (err) {
        done(err);
      });
  },
  function (err) {
    if (err) console.error;
  }
);

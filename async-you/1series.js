/* 
  Write a program that will receive two URLs as the first and second
  command-line arguments.

  Using http.get, create a GET request to these URLs and pass the response
  body to the callback.

  Pass in an object of task functions, using the property names requestOne
  and requestTwo, to async.series.

  console.log the results in the callback for series when all the task
  functions have completed.
*/

let http = require("http");
let fs = require("fs");
let async = require("async");

// for (let i = 0; i < process.argv.length; i++) {
//   console.log(process.argv[i]);
// }
// console.log(`process.argv[2] ${process.argv[2]}`);
// console.log(`process.argv[3] ${process.argv[3]}`);

async.series(
  {
    requestOne: function (done) {
      //   http get request
      let body = "";
      http
        .get(process.argv[2], function (res) {
          res.on("data", (chunk) => {
            // console.log(`chunk ${chunk}`);
            body += chunk;
          });
          res.on("end", function () {
            done(null, body);
          });
        })
        .on("error", (error) => {
          console.error(error);
        });
    },
    requestTwo: function (done) {
      //   http get request
      body = "";
      http
        .get(process.argv[3], function (res) {
          res.on("data", (chunk) => {
            // console.log(`chunk ${chunk}`);
            body += chunk;
          });
          res.on("end", function () {
            done(null, body);
          });
        })
        .on("error", (error) => {
          console.error(error);
        });
    },
  },

  function (err, result) {
    if (err) return console.error(err);
    console.log(result);
    // {requestOne: requestOneValue, requestTwo: requestTwoValue}
  }
);

// Official Solution

// var http = require('http')
//       , async = require('async');

//     async.series({
//       requestOne: function(done){
//         fetchURL(process.argv[2], done);
//       },
//       requestTwo: function(done){
//         fetchURL(process.argv[3], done);
//       }
//     },
//     function done(err, result){
//       if (err) return console.error(err);
//       console.log(result);
//     });

//     function fetchURL(url, done) {
//       var body = '';
//       http.get(url, function(res){
//         res.on('data', function(chunk){
//           body += chunk.toString();
//         });

//         res.on('end', function(chunk){
//           done(null, body);
//         });
//       }).on('error', function(e){
//         done(e);
//       });
//     }

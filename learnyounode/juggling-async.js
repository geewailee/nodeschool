/* 
same as previous problem

3 URLS this time

collect complete content by each URL,
    print to console

Don't need length, just string
    one line per URL

must pring in the same order as the URLs provided

Don't 
    use [`async`]
    use [`run-parallel`]
*/

// const bl = require("bl");
// const http = require("http");
// // const async = require("async");

// let req = (input) => {
//   http.get(input, (response) => {
//     response.pipe(
//       bl(function (err, data) {
//         if (err) return console.log(`err ${err}`);
//         console.log(data.toString());
//         // console.log(data);
//       })
//     );
//   });
// };

// setTimeout(req, 10, process.argv[2]);
// setTimeout(req, 50, process.argv[3]);
// setTimeout(req, 100, process.argv[4]);

// Official Solution

"use strict";
const http = require("http");
const bl = require("bl");
const results = [];
let count = 0;

function printResults() {
  for (let i = 0; i < 3; i++) {
    console.log(results[i]);
  }
}

function httpGet(index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(
      bl(function (err, data) {
        if (err) {
          return console.error(err);
        }

        results[index] = data.toString();
        count++;

        if (count === 3) {
          printResults();
        }
      })
    );
  });
}

for (let i = 0; i < 3; i++) {
  httpGet(i);
}

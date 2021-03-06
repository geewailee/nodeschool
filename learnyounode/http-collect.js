// perform HTTP GET request to a URL provided in first argument

// collect all data from server,
// then write 2 lines to the console

// first line
// just an integer representing
// the number of character received from the server

// second line
// the complete string of character sent
"use strict";
const http = require("http");
const bl = require("bl");

http.get(process.argv[2], function (response) {
  response.pipe(
    bl(function (err, data) {
      if (err) {
        return console.error(err);
      }
      data = data.toString();
      console.log(data.length);
      console.log(data);
    })
  );
});

// ("use strict");
// const http = require("http");
// const bl = require("bl");

// http.get(process.argv[2], function (response) {
//   response.pipe(
//     bl(function (err, data) {
//       if (err) {
//         return console.error(err);
//       }
//       data = data.toString();
//       console.log(data.length);
//       console.log(data);
//     })
//   );
// });

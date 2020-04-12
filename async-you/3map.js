let http = require("http");
let async = require("async");

async.map(
  process.argv.slice(2),
  function (url, done) {
    let body = "";
    http.get(url, function (res) {
      res.on("data", function (chunk) {
        //   console.log(`chunk ${chunk}`);
        body += chunk.toString();
      });
      res.on("end", function () {
        done(null, body);
      });
    });
  },

  function (err, results) {
    if (err) {
      return console.log(err);
    }
    console.log(results);
  }
);

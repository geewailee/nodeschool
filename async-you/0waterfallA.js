let http = require("http");
let fs = require("fs");
let async = require("async");
let filePath = process.argv[2];

console.log(`\n`);

async.waterfall(
  [
    function (cb) {
      fs.readFile(filePath, function (err, content) {
        if (err) {
          return err;
        }
        // console.log(`content ${content}`);
        // http://localhost:3945

        cb(null, content.toString());
      });
    },

    function (content, cb) {
      var body = "";
      http
        .get(content, function (res) {
          res.on("data", function (chunk) {
            // console.log(`chunk ${chunk}`);
            // boom!

            body += chunk.toString();
          });
          res.on("end", function () {
            cb(null, body);
          });
        })
        .on("error", function (err) {
          cb(err);
        });
    },
  ],
  function (err, result) {
    if (err) return console.error(err);
    console.log(`\ncallback`);
    console.log(result);
    // boom!
  }
);

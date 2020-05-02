const http = require("http");
const url = require("url");

// GET Request
// /api/parsetime?iso=2013-08-10T12:10:15.474Z

// path = "/api/parsetime";
// key = iso
// ISO-format time as teh value

/*
JSON response
{
    "hour": 14,
    "minute": 23,
    "second": 15
}
*/
// Add a second point for the path '/api/unixtime'
// which accepts the query string
// but returns UNIX epoch time in ms under the property 'unixtime'
// { "unixtime": 1376136615474}

// const myURL = new URL('/foo', 'https://example.org/');
// https://example.org/foo

let start = http
  .get(process.argv[2], (res) => {
    res.setEncoding("utf8");
    res.on("data", console.log);
    res.on("error", console.error);
  })
  .request.end();
let end = http
  .createServer((req, res) => {
    // route your requests for the 2 endpoints

    // parse the URL and query string
    let requrl = new URL(req.url);
    console.log(`requrl ${requrl}`);
    let path = url.parse(req.url, true);
    console.log(path);

    // res should be in JSON stringify format
    // set the Content-Type properly
    res.writeHead(200, { "Content-Type": "application/json" });

    let thisDate = new Date().toISOString();
    // new Date('05 October 2011 14:48 UTC');
    // Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)
    // toISOString() 2011-10-05T14:48:00.000Z
  })
  .listen(start);

const http = require("http");
const url = require("url");

/*
GET Request
/api/parsetime?iso=2013-08-10T12:10:15.474Z
*/

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

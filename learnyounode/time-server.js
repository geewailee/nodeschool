// write a TCP time server

// listen to TCP connections on the port
// provided by the first argument process.argv[2]

// write the current date & 24 hour time
// "YYYY-MM-DD hh:mm"

// newline

// Month, day, hour, minute
// must be filled to 2 integers
// "2013-07-06 17:42"

// Close the connection after the string

// net module
// net.createServer()
// returns an instance of your server

// function listener (socket) {}

// use server.listen(poertNumber) to listen to a particular port

// const net = require("net");

// const server = net.createServer(function (socket) {
//   // write current date for each connection
//   // to create the date
//   // need to create a custom formate from new Date() object
//   let date = new Date();

//   let year = date.getFullYear();
//   // console.log(year);

//   let month = ("0" + (date.getMonth() + 1)).slice(-2);
//   // console.log(month);
//   let cdate = ("0" + date.getDate()).slice(-2);
//   // console.log(cdate);
//   let hours = date.getHours();
//   // console.log(hours);
//   let minutes = date.getMinutes();
//   // console.log(minutes);
//   // socket handling logic

//   // "YYYY-MM-DD hh:mm"
//   // "2013-07-06 17:42"
//   let data =
//     year + "-" + month + "-" + cdate + " " + hours + ":" + minutes + "\n";
//   // console.log(`data ${data}`);

//   // close the connection after sending
//   // use socket.end() to close the socket
//   // the .end() method also takes a data object so
//   // you can simplify to just socket.end(data)
//   socket.end(data);
// });

// // listen to connection on the port
// // call connection listener more than once
// // every connection received by the server triggers another call to the listener
// // user the port number supplied as the first argument
// server.listen(process.argv[2]);

// official solution

("use strict");
const net = require("net");

function zeroFill(i) {
  return (i < 10 ? "0" : "") + i;
}

function now() {
  const d = new Date();
  return (
    d.getFullYear() +
    "-" +
    zeroFill(d.getMonth() + 1) +
    "-" +
    zeroFill(d.getDate()) +
    " " +
    zeroFill(d.getHours()) +
    ":" +
    zeroFill(d.getMinutes())
  );
}

const server = net.createServer(function (socket) {
  socket.end(now() + "\n");
});

server.listen(Number(process.argv[2]));

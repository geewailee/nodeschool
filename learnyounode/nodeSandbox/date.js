let date = new Date();

let year = date.getFullYear();
// console.log(year);

let month = ("0" + (date.getMonth() + 1)).slice(-2);
// console.log(month);
let cdate = ("0" + date.getDate()).slice(-2);
// console.log(cdate);
let hours = date.getHours();
// console.log(hours);
let minutes = date.getMinutes();
// console.log(minutes);
// socket handling logic

// "YYYY-MM-DD hh:mm"
// "2013-07-06 17:42"
let data =
  year + "-" + month + "-" + cdate + " " + hours + ":" + minutes + "\n";
console.log(`data ${data}`);
// data 2020-04-12 13:15

let isoDate = new Date().toISOString();
console.log(`isoDate ${isoDate}`);
// isoDate 2020-04-12T17:15:50.067Z

//returns milliseconds since epoch
let time = date.getTime();
console.log(`time ${time}`);
// time 1586711750055

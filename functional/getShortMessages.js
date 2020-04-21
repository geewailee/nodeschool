/*
Use Array#filter to write a function called getShortMessages.  

getShortMessages takes an array of objects with '.message' properties and 
returns an array of messages that are less than < 50 characters long.

The function should return an array containing the messages themselves,
 without their containing object.
*/

// input: array of objects (strings)
// returns array of messages
//    messages < 50 characters long
let messages = [
  {
    message: "Esse id amet quis eu esse aute officia ipsum." // random
  },
  {
    message: "Tempor quis esse consequat sunt ea eiusmod."
  },
  {
    message: "Id culpa ad proident ad nulla laborum incididunt."
  },
  {
    message: "Ullamco in ea et ad anim anim ullamco est."
  },
  {
    message: "Est ut irure irure nisi."
  },
  {
    message:
      "Lorem sint et occaecat officia sint duis proident laborum id ex voluptate laboris velit sunt."
  }
];

console.log("messages");
console.log(messages);

function getShortMessages(messages) {
  let arrOfMessages = messages
    .filter(key => key.message.length < 50)
    .map(object => object.message);
  console.log("arrOfMessages");
  console.log(arrOfMessages);

  return arrOfMessages;
}

console.log(getShortMessages(messages));

/* let vals = obj.map(object => obj.message);

  console.log("vals");
  console.log(vals);
*/
/*
  const originalArray = [
    { a: 1, b: "first" },
    { a: 2, b: "second" },
    { a: 3, b: "third" }
  ];
  const newArray = originalArray.map(object => object.b);
  console.log(newArray); // ['first', 'second', 'third']
*/
/*
  let newArr = [];
  newArr.push(Object.values(obj));
  */
/*
  for (key in obj) {
    let val = obj[key];
    console.log("val " + val);

    newArr.push(obj[key]);
  }
  */

/*
function getShortMessages(messages) {
  // SOLUTION GOES HERE

  // fitler messages
  let arrayOfMessages = messages.filter(message => {
    console.log("message " + message);
    console.log("message.length " + message.length);
    // check if messages < 50 characters long
    return message.length < 50, messages;
  });

  //   return array of messages
  return arrayOfMessages;
}

*/

///////////////////////////////////////////

// solution

/*
module.exports = function getShortMessages(messages) {
  return messages
    .filter(function(item) {
      return item.message.length < 50;
    })
    .map(function(item) {
      return item.message;
    });
};
*/

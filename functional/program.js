function upperCaser(input) {
  // SOLUTION GOES HERE
  return input.toUpperCase();
}

module.exports = upperCaser;

function repeat(operation, num) {
  // SOLUTION GOES HERE
  for (let i = 0; i < num; i++) {
    operation();
  }
}

// Do not remove the line below
module.exports = repeat;

function doubleAll(numbers) {
  // SOLUTION GOES HERE
  map = numbers.map(x => x * 2);
  return map;
}

module.exports = doubleAll;

function getShortMessages(messages) {
  // SOLUTION GOES HERE
  let arrOfMessages = messages
    .filter(key => key.message.length < 50)
    .map(object => object.message);
  console.log("arrOfMessages");
  console.log(arrOfMessages);

  return arrOfMessages;
}
module.exports = getShortMessages;

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

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
    let validId = goodUsers.map(obj => obj.id);
    console.log("validId " + validId);

    let submitId = submittedUsers.map(obj => obj.id);
    console.log("submitId " + submitId);
    console.log("");

    // Check if ids match
    let check = submitId.every(currentId => {
      console.log("check every valid Id");

      console.log("currentId (valid) " + currentId);
      console.log("submitId (new) " + submitId);
      console.log("");

      return validId.some(submittedId => {
        console.log("some check");
        console.log("submittedId " + submittedId);
        console.log("currentId " + currentId);
        console.log("");
        return currentId === submittedId;
      });
    });

    return check;
  };
}

module.exports = checkUsersValid;

module.exports = function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUser) {
      return goodUsers.some(function(goodUser) {
        return goodUser.id === submittedUser.id;
      });
    });
  };
};

function countWords(inputWords) {
  // SOLUTION GOES HERE
  return inputWords.reduce((accumulator, item) => {
    // check if item is found in object as key
    accumulator[item] = ++accumulator[item] || 1;
    return accumulator;
  }, {});
}

module.exports = countWords;
/*
function countWords(arr) {
  return arr.reduce(function(countMap, word) {
    countMap[word] = ++countMap[word] || 1 // increment or initialize to 1    
    return countMap
  }, {}) // second argument to reduce initialises countMap to {}
}

module.exports = countWords
*/

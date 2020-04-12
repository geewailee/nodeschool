/*
Return a function that takes a list of valid users, 

and returns a function that returns true 
    if all of the supplied users exist in the original list of users.      

You only need to check that the ids match.
*/
var goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];

/*
function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // true if supplied exists in original
    // original list = goodUsers = validUsers
    // supplied list = submittedUsers

    // get array Ids
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

// `checkUsersValid` is the function you'll define
var testAllValid = checkUsersValid(goodUsers);

console.log(testAllValid([{ id: 2 }, { id: 1 }]));
// => true
console.log(testAllValid([{ id: 2 }, { id: 4 }, { id: 1 }]));
// => false

*/
function checkUsersValidRefactored(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // Does every check of at least one goodUser = submitted user
    // equal true?
    console.log("for every submittedUser?");
    console.log(submittedUsers);

    return submittedUsers.every(submittedUser => {
      // submittedUser = submittedUser.id found in goodUser.id
      // Does at least one goodUser value equal the submittedUser's Id?
      console.log("at least one submitted user in goodUsers?");
      console.log(goodUsers);

      return goodUsers.some(goodUser => {
        console.log(goodUser);
        console.log(goodUser.id);
        console.log(submittedUser.id);

        return submittedUser.id === goodUser.id;
      });
    });
  };
}

var testAllValidRefactored = checkUsersValidRefactored(goodUsers);

console.log(testAllValidRefactored([{ id: 2 }, { id: 1 }]));
// => true
console.log("");

console.log(testAllValidRefactored([{ id: 2 }, { id: 4 }, { id: 1 }]));
// => false

module.exports = function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUser) {
      return goodUsers.some(function(goodUser) {
        return goodUser.id === submittedUser.id;
      });
    });
  };
};

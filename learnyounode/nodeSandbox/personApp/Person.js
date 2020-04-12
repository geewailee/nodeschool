// Export function as a class

// In the JavaScript, a function can be treated like a class.
// The following example exposes a function which can be used like a class.

module.exports = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
};

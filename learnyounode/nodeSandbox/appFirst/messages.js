// The following example exposes simple string message as a module in Message.js.

// module.exports = "Hello world";

//or

// exports = "Hello world";

/*
exports is an object. So, you can attach properties or methods to it. 
The following example exposes an object with a string property in Message.js file.
*/

exports.SimpleMessage = "Hello world simple message 1";

//or

module.exports.SimpleMessage = "Hello world simple message 2";

// In the above example, we have attached a property "SimpleMessage" to the exports object.

/*
In the above example of logging module, we have created an object with three functions 
     info(), warning() and error(). 
     
At the end, we have assigned this object to module.exports. 

var log = {
    info: function(info) {
        console.log("Info: " + info);
    },
    warning: function(warning) {
        console.log("Warning: " + warning);
    },
    error: function(error) {
        console.log("Error: " + error);
    }
};

module.exports = log;
*/

// The module.exports in the above example exposes a log object as a module.

// The module.exports is a special object which is included in every JS file in the Node.js application by default.
// Use module.exports or exports to expose a function, object or variable as a module in Node.js

// The same way as above, you can expose an object with function.
// The following example exposes an object with log function as a module.

// module.exports.log = function(msg) {
//   console.log(msg);
// };

// The above module will expose an object- { log : function(msg){ console.log(msg); } }

// You can attach an anonymous function to exports object as shown below.
module.exports = function(anonymousMessage) {
  console.log(anonymousMessage);
};

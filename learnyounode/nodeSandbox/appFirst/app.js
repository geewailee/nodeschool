// https://www.tutorialsteacher.com/nodejs/nodejs-module-exports
/*
To use local modules in your application, 
you need to load it using require() function in the same way as core module. 

However, you need to specify the path of JavaScript file of the module.

The following example demonstrates how to use the above logging module contained in Log.js.
*/

// var myLogModule = require("./Log.js");

// myLogModule.info("Node.js started");

/*
In the above example, app.js is using log module. 

First, it loads the logging module using require() function 
and specified path where logging module is stored. 

Logging module is contained in Log.js file in the root folder. 

So, we have specified the path './Log.js' in the require() function. 
    The '.' denotes a root folder. 

The require() function returns a log object because logging module exposes an object in Log.js using module.exports. 

So now you can use logging module as an object and 
call any of its function using dot notation 
    e.g myLogModule.info() 
    or myLogModule.warning() 
    or myLogModule.error()
*/

// var msg = require("./Messages.js");

// console.log(msg);

// var msg = require("./Messages.js");

// console.log(msg.SimpleMessage);

// var msg = require("./Log.js");
// msg.log("Hello World Mothafucka!"); // Hello World Mothafucka!

var data = require("./data.js");
console.log(data);
// { firstName: 'James', lastName: 'Bond' }

var msg = require("./Log.js");
msg("Hello World Anonymously"); // Hello World Anonymously

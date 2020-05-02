// The way you have learned: create promise through the constructor.

let promise = new Promise(function (fulfill, reject) {
  fulfill("SECRET VALUE");
});

// Introducing: Promise.resolve
// It does the exact same thing as above:

let promise = Promise.resolve("SECRET VALUE");

// Likewise...

let promise = new Promise(function (fulfill, reject) {
  reject(new Error("SECRET VALUE"));
});

let promise = Promise.reject(new Error("SECRET VALUE"));

// We don’t have any specific task we’d like to assign to you for this lesson.
// Feel free to explore all three functions at your own pace. When you are
// preparing to submit though, make sure you are using at least catch and one
// of Promise.resolve and Promise.reject ☺

let promise = new Promise((fulfill, reject) => {
  fulfill("val");
});

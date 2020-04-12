// Use http.request, send a POST request to
// url + '/users/create

// with the body containing
// {"user_id": 1}

// Do this 5 times with each time the user_id property
// incremented starting at 1

// Once the requests are done, send a GET Request to:
// url + '/users'

// use async.series for this
// pass in an object

// use async.times to send POST requests using http.request
// The other will then do the GET request

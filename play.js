const { connect } = require('./client');
//imports the connect function using ES6 Shorthand syntax

const { setupInput } = require('./input');
//imports the setupInput function using ES6 Shorthand syntax

console.log("Connecting ...");


setupInput(connect());
//connect() returns an object that can be used to interact with the server
//passing connect() as a parameter allows setupInput() to access that object
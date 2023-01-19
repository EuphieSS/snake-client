const { connect } = require('./client');
//imports the connect function using ES6 Shorthand syntax

const { setupInput } = require('./input');
//imports the setupInput function using ES6 Shorthand syntax

console.log("Connecting ...");
connect();

setupInput();
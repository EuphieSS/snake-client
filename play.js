const { net, connect } = require('./client');
//imports the connect function using ES6 Shorthand syntax

// setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput); //event listener

  return stdin;
};

const handleUserInput = function(key) { //runs when receive keyboard input from user
    if (key === '\u0003') { // \u0003 maps to ctrl+c input
      process.exit();
    }
  };

setupInput();
// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn; //allows handleUserInput to access server connection

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
  if (key === 'w') {
    connection.write("Move: up"); //keyboard binding
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: right");
  }
  if (key === 'd') {
    connection.write("Move: down");
  }
  if (key === 'g') {
    connection.write("Say: GG");
  }
  if (key === 'v') {
    connection.write("Say: Sssssssnake!");
  }
  if (key === 'b') {
    connection.write("Say: Challenge Accepted");
  }
};


//exports the setupInput function using ES6 Shorthand syntax
module.exports = {
  setupInput,
};
//CLIENT
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({ //sets up connection
    host: '165.227.47.243', // IP address here
    port: 50541  // PORT number here
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => { //handles data from server
    console.log("Server says: ", data); //logs data if received
  })

  conn.on("connect", (connect) => { //checks if connection is successful
    console.log("Successfully connected to game server");
    conn.write("Name: SSS"); //sends message to server upon connection
  })

  return conn; //the return establishes connection
};

console.log("Connecting ...");
connect();

//exports the connect function using ES6 Shorthand syntax
module.exports = {
  net,
  connect,
};
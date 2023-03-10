//CLIENT
const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({ //sets up connection
    host: IP, // IP address here
    port: PORT  // PORT number here
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => { //handles data from server
    console.log("Server says: ", data); //logs data if received
  })

  conn.on("connect", (connect) => { //checks if connection is successful
    console.log("Successfully connected to game server");
    conn.write("Name: SSS"); //sends message to server upon connection
    
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 100);

    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 500);

  })

  return conn; //the return establishes connection
};



//exports the connect function using ES6 Shorthand syntax
module.exports = {
  connect,
};
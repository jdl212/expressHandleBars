	// require mysql package
var mysql = require("mysql");
// variable to store connection information
var connection;

// create a mysql connection
// make sure the mysql service is up and running
connection = mysql.createConnection({
    host: "localhost",
    user: "test",
    password: "test",
    database: "burgers_db"
});

// try to connect to mysql
connection.connect(function(err) {
  if(err){
    console.error("Unable to connect to the MYSQL database, Please check credientials");
    throw err;
  }
  console.info("successfully connected to MySQL DB with connection id: " + connection.threadId);
});

// Export the connection
module.exports = connection;
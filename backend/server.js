const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(cors());

// get the client

// create the connection to database
const connection = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "root",
   database: "travel",
});

if (connection) {
   console.log("MySQL connected successfully!");
} else {
   console.log("something went wrong");
}

app.get("/", (req, res) => {
   res.send("Hello Express~");
});

app.get("/attractions", function (req, res, next) {
   connection.query("SELECT * FROM attractions", (error, results, fields) => {
      if (error) throw error;
      res.json(results);
   });
});

const PORT = 4000;
app.listen(PORT, function () {
   console.log(`Server is running on port: ${PORT}`);
});

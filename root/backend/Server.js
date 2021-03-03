//Imports
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

//Initilize middleware
const app = express();
const bcrypt = require('bcrypt');
const saltRounds = 10;
app.use(express.json());
app.use(cors());

//Connect to mysql db
const db = mysql.createConnection({
  user: 'kai',
  host: 'localhost',
  password: 'root123',
  database: 'fitnesscentral'
});

//Display mysql db status
db.connect(function (err) {
  if (err) {
      console.log('Error connecting to Database',err);
      return;
  }
  console.log('Connection established');
});

//Post request for users registering (adds credentials to mysql db)
app.post("/registered", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO users (username, email, password) VALUES (?,?,?)",
    [username, email, password],
    (err, result) => {
    console.log(err);
    }
  );
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM fitnesscentral.users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        //If error return error
        console.log(err);
      }
      if (result.length > 0) {
        //If result send user
        console.log(result);
        res.send(result);
      } else {
        //If user credentials don't exist return this message
        console.log({ message: "Incorrect Username/Password combination!" });
        res.send({ message: "Incorrect username/password combination" });
      }
    }
  );
});

//Listen to the port 3001
app.listen(3001, () => {
  console.log("Server running");
});

// //Post req to insert users details into db
// app.post("/registered", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   bcrypt.hash(password, saltRounds, (err, hash) => {

//     if (err) {
//       console.log(err);
//     }

//     db.query(
//       "INSERT INTO users (username, password) VALUES (?,?)",
//       [username, password],
//       (err, result) => {
//         console.log(err);
//       }
//     );
//   });
// });

// //Login route to check user/pass is the same
// app.post("/sign-up", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   db.query(
//     "SELECT * FROM users WHERE username = ?;",
//     username,
//     (err, result) => {
//       if (err) {
//         res.send({ err: err});
//       }

//       if (result.length > 0) {
//         //If yes then send user to front end (logs in user)
//         bcrypt.compare(password, result[0].password, (error, response) => {
//           if (response) {
//             res.send(result)
//           } else {
//             //If no but user exists then return this message
//         res.send({ message: "Wrong username/password combination!" });
//           }
//         });
//       } else {
//         //If no user match then return this message
//         res.send({ message: "User doesn't exist!" });
//       }
//     }
//   )
// });

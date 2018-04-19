/**
 * Created by littleworld on 15/02/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
app.use(bodyParser.json());

var mysql = require('mysql');
function getConnection() {
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'blokkendoos',
    database: 'gesti'
  });
  return connection;
}

app.listen(4200, function () {
  console.log('users app on port 4200');
});

app.use(express.static('YC-project/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'YC-project/dist/index.html'));
});

app.post('/login', function (req, res) {
  console.log('in /login');
  user = req.body.username;
  password = req.body.password;

  var connection = getConnection();
  connection.connect();

  if (user != undefined) {
    var query = connection.query('select password from users where user_name = ?', user, function (err, result) {

      if (result[0].password == password) {
        console.log('welcome ' + user);
        res.send({ 'result': 'goed' });
      }
      else {
        console.log('password of username is fout');
        res.status(401).send({ 'result': 'fout' });
      }

    });
  }
  else {
    res.status(401).send({ 'result': 'fout' });
  }

  connection.end();

});

app.post('/signUp', function (req, res) {
  console.log('in /signUp');
  user = req.body.username;
  password = req.body.password;


  var connection = getConnection();
  connection.connect();

  var newUser = {user_name: req.body.username, password: req.body.password, email: req.body.email, name: req.body.name, age: req.body.age, sex: req.body.sex, residence: req.body.residence, genre1: req.body.genres};
  var query = connection.query('INSERT INTO users SET ?', newUser, function (err, result) {
  console.log("added " +  user);
  console.log("sign-up");
  res.send({ 'result': 'goed' });
});

  connection.end();

});


// app.post('/users', function (req, res) {
//   var connection = getConnection();
//   connection.connect();
//   var newUser = {id: 0, userName: req.body.userName, password: req.body.password};
//   var query = connection.query('INSERT INTO users SET ?', newUser, function (err, result) {
//     console.log("added " +  newUser);
//     res.status(200).end();
//   });
//   connection.end();
// });
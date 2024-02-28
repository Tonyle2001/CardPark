var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var dbConn  = require('../lib/db');

// display  all users page
router.get('/', function(req, res) {

    dbConn.query('SELECT * FROM Users',function(err,users){

        if(err) {
          res.status(500).send({ message: err.message });
        } else {
            res.status(200).send({ users:users });
        }
    });
});

router.get('/:uid', function(req, res) {
  
  let uid = req.params.uid;

  dbConn.query('SELECT * FROM Users where uid = ?', uid, function(err, result){

      if(err) {
        res.status(500).send({ message: err.message });
      } else {
          res.status(200).send({ users:result });
      }
  });
});


// add a new user
router.post('/', bodyParser.urlencoded(), function(req, res) {
    
  let params = req.body;

  let uid = params.uid;
  let fname = params.fname;
  let lname = params.lname;
  let email = params.email;
  let passwrd = params.passwrd;

  var sql = "INSERT INTO  users (UID, Fname, Lname, email, passwrd) VALUES (?, ?, ?, ?, ?)"
  
  // insert query
  dbConn.query(sql, [uid, fname, lname, email, passwrd], function(err, result) {
    //if(err) throw err
  if (err) {
    res.status(500).send({ message: err.message });
    } else {
      res.status(200).send( { user:result } );
      }
  })
})

// update user data
router.post('/:id', function(req, res) {

  let params = req.body;

  let uid = req.params.id;
  let fname = params.fname;
  let lname = params.lname;
  let email = params.email;
  let passwrd = params.passwrd;


  var sql = "UPDATE Users SET Fname = ?, Lname = ?, email = ?, passwrd = ? WHERE uid = ?"
  
  // update query
  dbConn.query(sql, [fname, lname, email, passwrd, uid], function(err, result) {
      //if(err) throw err
      if (err) {
        res.status(500).send({ message: err.message });
        } else {
          res.status(200).send( { user:result } );
          }
  })
})

// delete user
router.delete('/:uid', function(req, res) {

    let uid = req.params.uid;

    dbConn.query('DELETE FROM Users WHERE uid = ?', uid, function(err, result) {
      //if(err) throw err
      if (err) {
        res.status(500).send({ message: err.message });
        } else {
          res.status(200).send( { user:result } );
          }
    })
})

module.exports = router;
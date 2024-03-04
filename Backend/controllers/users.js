'use strict';

var dbConn  = require('../lib/db');
let bcrypt = require('bcrypt');

function getAll(req, res) {

    dbConn.query('SELECT * FROM Users',function(err,users){
        
        if(err) {
          res.status(500).send({ message: err.message });
        } else { //Return to view
            res.status(200).send({ users:users }); 
        }
    });
}

function getByID(req, res) {
  
    let uid = req.params.uid;
  
    dbConn.query('SELECT * FROM Users where uid = ?', uid, function(err, result){
  
        if(err) {
          res.status(500).send({ message: err.message });
        } else {
            res.status(200).send({ users:result });
        }
    });
  }

function addUser(req, res) {
    
    let params = req.body;
  
    let uid = params.uid;
    let fname = params.fname;
    let lname = params.lname;
    let email = params.email;
    let password = params.password;

    const saltRounds = 10;
    bcrypt.hash(password, saltRounds).then(hash => {

    var sql = "INSERT INTO  users (UID, Fname, Lname, email, passwrd) VALUES (?, ?, ?, ?, ?)"
    
    // insert query
    dbConn.query(sql, [uid, fname, lname, email, hash], function(err, result) {
    //if(err) throw err
    if (err) {
        res.status(500).send({ message: err.message });
    } else {
        res.status(200).send( { user:result } );
        }
    });
        }).catch(err => console.error(err.message));
}

function updateUser(req, res) {

    let params = req.body;
  
    let uid = req.params.id;
    let fname = params.fname;
    let lname = params.lname;
    let email = params.email;
  
  
    var sql = "UPDATE Users SET Fname = ?, Lname = ?, email = ? WHERE uid = ?"
    
    // update query
    dbConn.query(sql, [fname, lname, email, uid], function(err, result) {
        //if(err) throw err
        if (err) {
          res.status(500).send({ message: err.message });
          } else {
            res.status(200).send( { user:result } );
            }
    });
}

function deleteByID(req, res) {

    let params = req.body;

    let uid = params.uid;

    dbConn.query('DELETE FROM Users WHERE uid = ?', uid, function(err, result) {
      //if(err) throw err
      if (err) {
        res.status(500).send({ message: err.message });
        } else {
          res.status(200).send( { user:result } );
          }
    });
}

function Login(req, res) {
    
    let params = req.body;

    let email = params.email;
    let password = params.password;

    dbConn.query('SELECT uid, passwrd FROM Users WHERE email = ?', email, function(err, user){
        if(err) {
          res.status(500).send({ message: err.message });
        } else {
            if(!user){
                res.status(404).send({ message: 'User does not exist'});
            } else {
                bcrypt.compare(password, user[0].passwrd, (err, check) =>{
                    if(check){
                        res.status(200).send({ user:user[0].uid });
                    } else {
                        res.send('Incorrect password');
                    }
                });
            }
        }
    });
}

module.exports = {
    getAll,
    getByID,
    addUser,
    updateUser,
    deleteByID,
    Login
}
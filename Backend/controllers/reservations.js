'use strict';

var dbConn  = require('../lib/db');

function getAll(req, res) {

    dbConn.query('SELECT * FROM Reservations',function(err,result){
        
        if(err) {
          res.status(500).send({ message: err.message });
        } else { //Return to view
            res.status(200).send({ reservations:result }); 
        }
    });
}

function getByUID(req, res) {
  
    let uid = req.params.uid;
  
    dbConn.query('SELECT * FROM Reservations where uid = ?', uid, function(err, result){
  
        if(err) {
          res.status(500).send({ message: err.message });
        } else {
            res.status(200).send({ reservations:result });
        }
    });
  }

function addReservation(req, res) {
    
    var date = new Date();
    let params = req.body;
  
    let uid = params.uid;
    let lid = params.lid;
    let spot = params.spot;
    let check_in = false;
    let arrv_time = date.toLocaleString();


    var sql = "INSERT INTO  reservations (arrv_time, check_in, UID, LID, spot_num) VALUES (?, ?, ?, ?, ?)"
    
    // insert query
    dbConn.query(sql, [arrv_time, check_in, uid, lid, spot], function(err, result) {
    //if(err) throw err
    if (err) {
        res.status(500).send({ message: err.message });
    } else {
        res.status(200).send( { reservation:result } );
        }
    });
}

function updateReservation(req, res) {

    var date = new Date();
    let params = req.body;
    
    let uid = params.uid;
    let lid = params.lid;
    let spot = params.spot_num;
    let arrv_time = date.toLocaleTimeString();
  
  
    var sql = "UPDATE reservations SET arrv_time = ?, lid = ?, spot = ? WHERE uid = ?"
    
    // update query
    dbConn.query(sql, [arrv_time, lid, spot, uid], function(err, result) {
        //if(err) throw err
        if (err) {
          res.status(500).send({ message: err.message });
          } else {
            res.status(200).send( { reservation:result } );
            }
    });
}

function deleteByUID(req, res) {

    let params = req.body;

    let uid = params.uid;

    dbConn.query('DELETE FROM reservations WHERE uid = ?', uid, function(err, result) {
      //if(err) throw err
      if (err) {
        res.status(500).send({ message: err.message });
        } else {
          res.status(200).send( { reservation:result } );
          }
    });
}

function check_in(req, res) {
    
    let params = req.body;

    let uid = params.uid;

    var sql = "UPDATE reservations SET check_in = TRUE WHERE uid = ?"
    
    // update query
    dbConn.query(sql, [uid], function(err, result) {
        //if(err) throw err
        if (err) {
          res.status(500).send({ message: err.message });
          } else {
            res.status(200).send( { reservation:result } );
            }
    });
}

module.exports = {
    getAll,
    getByUID,
    addReservation,
    updateReservation,
    deleteByUID,
    check_in
}
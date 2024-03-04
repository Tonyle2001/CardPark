'use strict';

var dbConn  = require('../lib/db');

function getAll(req, res) {

    dbConn.query('SELECT * FROM ParkingSpots',function(err,result){
        
        if(err) {
          res.status(500).send({ message: err.message });
        } else { //Return to view
            res.status(200).send({ spot:result }); 
        }
    });
}

function getOne(req, res) {
  
    let params = req.body;
  
    let lid = params.lid;
    let spot = params.num_spot;

    dbConn.query('SELECT * FROM ParkingSpots where lid = ? AND num_spot = ?', [lid, spot], function(err, result){
  
        if(err) {
          res.status(500).send({ message: err.message });
        } else {
            res.status(200).send({ spot:result });
        }
    });
  }

function addParkingSpot(req, res) {
    
    let params = req.body;
  
    let lid = params.lid;
    let spot = params.spot;
    let category = params.category;


    var sql = "INSERT INTO  ParkingSpots (LID, spot_num, category) VALUES (?, ?, ?)"
    
    // insert query
    dbConn.query(sql, [lid, spot, category], function(err, result) {
    //if(err) throw err
    if (err) {
        res.status(500).send({ message: err.message });
    } else {
        res.status(200).send( { reservation:result } );
        }
    });
}

function updateParkingSpot(req, res) {

    let params = req.body;
    
    let lid = params.lid;
    let spot = params.spot_num;
    let category = params.category;
  
  
    var sql = "UPDATE ParkingSpot SET category = ?  WHERE lid = ? AND spot_num = ?"
    
    // update query
    dbConn.query(sql, [category, lid, spot], function(err, result) {
        //if(err) throw err
        if (err) {
          res.status(500).send({ message: err.message });
          } else {
            res.status(200).send( { spot:result } );
            }
    });
}

function deleteParkingSpot(req, res) {

    let params = req.body;

    let lid = params.lid;
    let spot = params.spot_num;

    dbConn.query('DELETE FROM spot WHERE lid = ? AND spot_num = ?', [lid, spot], function(err, result) {
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
    getOne,
    addParkingSpot,
    updateParkingSpot,
    deleteParkingSpot
}
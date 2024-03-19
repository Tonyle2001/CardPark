'use strict';

var dbConn  = require('../lib/db');

function getAll(req, res) {

    dbConn.query('SELECT * FROM Vehicles',function(err,vehicles){
        
        if(err) {
          res.status(500).send({ message: err.message });
        } else { //Return to view
            res.status(200).send({ vehicles:vehicles }); 
        }
    });
}

function getByID(req, res) {
  
    let uid = req.params.uid;
  
    dbConn.query('SELECT * FROM Vehicles where uid = ?', uid, function(err, result){
  
        if(err) {
          res.status(500).send({ message: err.message });
        } else {
            res.status(200).send({ vehicles:result });
        }
    });
  }

function addVehicle(req, res) {
    
    let params = req.body;
  
    let uid = params.uid;
    let maker = params.maker;
    let model = params.model;
    let color = params.color;
    let year = params.year;
    let license_plate = params.license_plate;

    var sql = "INSERT INTO  vehicles (UID, maker, model, color, yr, license_plate) VALUES (?, ?, ?, ?, ?, ?)"
    
    // insert query
    dbConn.query(sql, [uid, maker, model, color, year, license_plate], function(err, result) {
    //if(err) throw err
    if (err) {
        res.status(500).send({ message: err.message });
    } else {
        res.status(200).send( { vehicle:result } );
        }
    });
}

function updateVehicle(req, res) {

    let params = req.body;
  
    let uid = params.uid;
    let maker = params.maker;
    let model = params.model;
    let color = params.color;
    let year = params.year;
    let license_plate = params.license_plate;  
  
    var sql = "UPDATE Vehicles SET maker = ?, model = ?, color = ?, yr = ?, license_plate = ? WHERE uid = ?"
    
    // update query
    dbConn.query(sql, [maker, model, color, year, license_plate, uid], function(err, result) {
        //if(err) throw err
        if (err) {
          res.status(500).send({ message: err.message });
          } else {
            res.status(200).send( { vehicle:result } );
            }
    });
}

function deleteByID(req, res) {

    let params = req.body;

    let uid = params.uid;

    dbConn.query('DELETE FROM Vehicles WHERE uid = ?', uid, function(err, result) {
      //if(err) throw err
      if (err) {
        res.status(500).send({ message: err.message });
        } else {
          res.status(200).send( { vehicle:result } );
          }
    });
}

module.exports = {
    getAll,
    getByID,
    addVehicle,
    updateVehicle,
    deleteByID,
}
'use strict';

var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');
let parkingspotController = require('../controllers/parkingspots');

router.get('/', parkingspotController.getAll); //Display  all parkingspots page
router.get('/:uid', parkingspotController.getOne); //Get One
router.post('/add', parkingspotController.addParkingSpot); //Add a new parkingspot
router.post('/update/:uid', parkingspotController.updateParkingSpot); //Update parkingspot data
router.delete('/delete', parkingspotController.deleteParkingSpot); // delete parkingspot by ID

module.exports = router;
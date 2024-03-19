'use strict';

var express = require('express');
var router = express.Router();
let vehicleController = require('../controllers/vehicles');

router.get('/', vehicleController.getAll); //Display  all vehicles page
router.get('/:uid', vehicleController.getByID); //Get One
router.post('/add', vehicleController.addVehicle); //Add a new vehicle
router.post('/update/', vehicleController.updateVehicle); //Update vehicle data
router.delete('/delete', vehicleController.deleteByID); // delete vehicle by ID

module.exports = router;
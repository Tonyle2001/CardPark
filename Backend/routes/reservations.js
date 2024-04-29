'use strict';

var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');
let reservationController = require('../controllers/reservations');

router.get('/', reservationController.getAll); //Display  all reservations page
router.get('/:uid', reservationController.getByUID); //Get One
router.get('/lot/:lid', reservationController.getByLID); //Get One
router.post('/add', reservationController.addReservation); //Add a new reservation
router.delete('/delete', reservationController.deleteByUID); // delete reservation by ID
router.post('/checkin', reservationController.check_in); //Change Check in to True

module.exports = router;
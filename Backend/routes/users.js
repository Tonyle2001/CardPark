'use strict';

var express = require('express');
var router = express.Router();
let userController = require('../controllers/users');

router.get('/', userController.getAll); //Display  all users page
router.get('/:uid', userController.getByID); //Get One
router.post('/add', userController.addUser); //Add a new user
router.post('/update', userController.updateUser); //Update user data
router.post('/change_password', userController.changePassword); //Change the password
router.delete('/delete', userController.deleteByID); // delete user by ID
router.post('/login', userController.Login); //Log in function

module.exports = router;
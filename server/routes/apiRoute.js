const express = require('express');
const router = express.Router();
var apiController = require('../controller/apiController');
const db = require('../database/connection')();

/* User List */

router.get('/user', apiController.getUsers);

/* Single User */

router.get('/user/:id', apiController.getSingleUser);

/* Add User  */

router.post('/user', apiController.addUser);

/* Update User */

router.put('/user/:id', apiController.updateUser);

/* Delete User */

router.delete('/user/:id', apiController.deleteUser);

// Buy Flight Ticket

router.post('/user/flight/:id',apiController.buyFlightTicket);

/* Admin Register */

router.post('/register', apiController.createAdmin);

/* List Admin */

router.get('/admin', apiController.getAdmin);


// Add Staff

router.post('/staff', apiController.addStaff);

/* Delete Staff */

router.delete('/staff/:id', apiController.deleteStaff);

// List Staff

router.get('/staff', apiController.getStaffs);

// List Flights

router.get('/flight', apiController.getFlights);

// Add Flight

router.post('/flight', apiController.addFlight);

// Delete Flight

router.delete('/flight/:id', apiController.deleteFlight);




/* Login */

router.post('/login', apiController.login);

router.post('/stafflogin', apiController.staffLogin);

router.post('/adminlogin', apiController.adminLogin);


module.exports = router;


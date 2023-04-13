const express = require('express');
const userController = require('../controller/users');

const router = express.Router();

// Routes for Users
router.get('/users', userController.getAllUsers);
router.get('/users/:firstName', userController.getParticularUser);
router.get('/createuser', userController.createNewUser);
router.get('/updateuser', userController.updateUser);

module.exports = router;

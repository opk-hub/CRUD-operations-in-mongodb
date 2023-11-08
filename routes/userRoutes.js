const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

// here using post method to add data in database
router.post('/add-user', registerController.createUser);

// here using get method to get the all users data from data base
router.get('/allusers',registerController.getUsers)


// here using get method to get the each user data from data base
router.get('/user/:id',registerController.singleUser)

// here using put method to update each user data using id
router.put('/update/:id',registerController.updateUser)

// here using delete method to delete each data using id
router.delete('/delete/:id',registerController.deleteUser)

module.exports = router;


const userSchema = require('../models/users');
const mongoose = require('mongoose');

const userModel = new mongoose.model('user', userSchema);

// Get All Users
async function getAllUsers(req, res){
  try{
    const result = await userModel.find({});
    res.send(result);
  }
  catch(err){
    console.log(err);
    res.status(400).send(err);
  }
}

// Get a Particular User
async function getParticularUser(req, res){
  try{
    const firstName = req.params.firstName;
    const result = await userModel.findOne({'firstName': firstName});
    res.send(result);
  }
  catch(err){
    console.log(err);
    res.status(400).send(err);
  }
}

// Create New User
async function createNewUser(req, res){
  try {

    const user = new userModel({
      firstName: 'Monu',
      lastName: 'Rana',
      age: 25,
      email: 'monu@gmail.com'
    });
    await user.save();
    res.status(200).send('User creted successfully');
  }
  catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

async function updateUser(req, res){
  try{
    const result = await userModel.findOneAndUpdate({firstName: 'Monu'}, {email: 'monurana@gmail.com'});
    res.status(200).send('User updated successfully.');
  }
  catch(err){
    console.log(err);
    res.sendStatus(400);
  }
}
module.exports = {
  getAllUsers,
  getParticularUser,
  createNewUser,
  updateUser,
};
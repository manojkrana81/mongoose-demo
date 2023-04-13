const express = require('express');
const app = express();
const mongoose = require('mongoose');
const usersRoute = require('./routes/users');
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT || 8080

// Connect to database
async function connectToDatabase(){
  await mongoose.connect(process.env.MONGODB_URL);
}

connectToDatabase().then(res => {
  console.log('Database connected');
}).
  catch(err => {
    console.log('Error occured connecting database');
  });


// Router middleware
app.use('/', usersRoute);

// Run server
app.listen(port, ()=>{
  console.log("Server started");
})
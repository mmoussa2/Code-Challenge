const express = require("express");
const mongoose = require('mongoose');

const app = express(); // this creates an express server
const db = require('./config/keys').mongoURI;

app.get('/', (req, res)  => res.send('Hello World  adsdsd' )) // this creates a route using the express server stored in app

const port = process.env.port || 5000  // this creates a port. If it is heroku process.env.port returns true else 5000

app.listen(port, () => console.log(`Server is running on ${port}`)); // run the server

//server: nodemon app.js
// So when we run npm run server nodemon runs the server by referring to the app.js file and it reflects the changes
// No need to quit the server just refresh 
// start: node app.js
// So when we run npm start we have to quit the server and run it again to reflect the changes

mongoose
.connect(db, {userNewUrlParser:true})
.then(()=>console.log('success'))
.catch((err)=> console.log(err));

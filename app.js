const express = require('express');
const bodyParser = require('body-parser');
const path = require ('path');
const cors = require ('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const config = require('./config/db');

const app = express();

//Declaring Port
const port = 3000;


const AdvertController = require('./controllers/advertController');
const UserController = require('./controllers/userController');
const AuthController = require('./controllers/authController');

// Connect mongoose to our database
mongoose.connect(config.database);

//Middleware for CORS
app.use(cors());

//Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/*express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files
*/
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.send("Invalid page");
});

app.use('/api/advert', AdvertController);
app.use('/api/user', UserController);
app.use('/api/auth', AuthController);

app.listen(port, () => {
    console.log(`Starting the server at port ${port}`);
});

module.exports = app;

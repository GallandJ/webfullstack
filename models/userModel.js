const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema =  mongoose.Schema({
  name: String,
  email: String,
  password: String,
  adverts: [{ type : Schema.Types.ObjectId, ref: 'advertModel'}]
});


const userModel = mongoose.model('userModel', UserSchema );
module.exports = userModel;

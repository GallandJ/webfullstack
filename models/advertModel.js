//Require mongoose package
const mongoose = require('mongoose');

var Schema = mongoose.Schema;
//Define BucketlistSchema with title, description and category
const AdvertSchema = mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    price:{
      type: Number,
      required: true
    },
    created_at: {
      type: Date,
      default: Date.now
    },
    updated_at: {
      type: Date,
      default: Date.now
    },
    description: {
      type: String,
      required: true
    },
    localisation: {
      type: Number,
      required: true
    },
    picture: {
      type: String
    },
    user:{ type :Schema.Types.ObjectId, ref: 'userModel'}
});
const advertModel = mongoose.model('advertModel', AdvertSchema );
module.exports = advertModel;

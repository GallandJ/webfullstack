const jwt = require('jsonwebtoken');
const config = require('../config/config');
const AdvertModel = require('../models/advertModel');

function authorization(req, res, next) {
  var token = req.headers['x-access-token'];
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    // if everything good, save to request for use in other routes
    req.userId = decoded.id;
    AdvertModel.findById(req.params.id, (err, advert) => {
      if(err){
        return res.json(err)
      }
      if(req.userId != advert.user){
        return res.json({message: 'Sorry, you do not have permission to edit or delete this advert.'})
      }
      next();
    })
  });
}

module.exports = authorization

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const AdvertModel = require('../models/advertModel');
const UserModel = require('../models/userModel');

const VerifyToken = require('../middlewares/VerifyToken');
const Authorization = require('../middlewares/Authorization');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());



router.get('/', (req,res) => {
  AdvertModel.find((err, adverts) =>{
    if(err){
      console.log(err);
    }
    console.log("adverts chargées");
    res.json(adverts);
  });
});

router.get('/:id', (req, res) => {
  AdvertModel.findById(req.params.id, (err, advert) => {
    if(err){
      console.log(err);
    }
    res.json(advert);
  });
});

router.post('/', VerifyToken, (req, res) => {
  var advert = new AdvertModel();
  advert.title = req.body.title;
  advert.price = req.body.price;
  advert.description = req.body.description;
  advert.localisation = req.body.localisation;
  advert.user = req.userId;
  console.log("req.userId : " + req.userId)

  UserModel.findByIdAndUpdate(req.userId, {$push: {adverts: advert._id}}, (err, user) => {
    if(err) res.json(err);
  })
  advert.save((err) =>  {
    if(err){
      res.json(err);
    }
  });

    res.json({message: 'Advert created !' + advert.title + advert.price})
});

router.delete('/:id', Authorization,(req, res) => {
  AdvertModel.findById(req.params.id, (err, advert) => {
    if(!advert) {
      res.json({message: 'No advert for this ID'})
    }
    advert.remove((err) => {
      if(err){
        res.json(err);
      }
      res.json({message: "Advert deleted"});
    });
  });
});

/*
router.get('/me', VerifyToken, (req, res) => {
  UserModel.findById(req.userId, (err, adverts) => {
    if(err){
      res.json(err);
    }
    AdvertModel.find({'user': req.userId}, (err, adverts) => {
      if(err) res.json(err);
      if(!user) res.json({message: 'No user corresponding to this token.'})
      res.json(adverts);
    });
  });
});
*/

module.exports = router;

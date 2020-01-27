
 //to handle a post request w need to use: npm install --save body-parser
//install mangos lib: npm install --save mongoose
//mongo db pwd: Vn1AZjrxuViTRBxN
//mongo db connection: mongodb+srv://Wassim:Vn1AZjrxuViTRBxN@cluster0-kphbc.mongodb.net/test?retryWrites=true&w=majority
//
const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config');
const stuffCtrl = require('../controllers/stuff');
const auth = require('../middleware/auth');
  // create thing by id
  router.post('/', auth, multer, stuffCtrl.createThing);
 // find all thing
 router.get('/', auth, stuffCtrl.finAllThings);
  // update Thing
  router.put('/:id', auth,multer, stuffCtrl.updateOneThing);
  // delete Thing
  router.delete('/:id', auth, stuffCtrl.deleteThing);
  // get by id
  router.get('/:id', auth, stuffCtrl.getThingById);


module.exports = router;
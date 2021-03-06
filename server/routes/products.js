'use strict'

const express = require('express');
const router = express.Router();
const Product = require('../model/product');
const UserCtrl = require('../controllers/user');

// router.get('/secret', UserCtrl.authMiddleware, (req, res) => {
//     return res.json({'secret' : true });
// });

router.get('', (req, res) => {
  Product.find({}, (error, products) => {
    return res.json({ products });
  })
});

router.get('/:productId', UserCtrl.authMiddleware, (req, res) => {
  const productId = req.params.productId;
  Product.findById(productId, (error, product) => {
    if(error) {
      return res.status(422).send({ errors: [{ title: 'Product error', detail: 'Product Not Found' }]});
    }
     return res.json({ product });
  })
});

module.exports = router;
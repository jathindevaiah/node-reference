const express = require('express');
const path = require('path');
const router = express.Router();
const roorDir = require('../util/path');

router.get('/addProduct', (req, res, next) => {
  res.sendFile(path.join(roorDir, 'views', 'add-product.html'));
});

router.post('/addProduct', (req, res, next) => {
  console.log(req.body);
  res.redirect('/shop');
});

module.exports = router;

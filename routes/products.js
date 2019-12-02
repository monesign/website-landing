var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/products', function(req, res, next) {
    res.send('products list');
});

module.exports = router;

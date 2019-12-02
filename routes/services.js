var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/services', function(req, res, next) {
    res.send('Services list');
});

module.exports = router;

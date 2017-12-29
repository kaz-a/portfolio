const router = require('express').Router();

router.use('/work', require('./work'));
// router.use('/about', require('/about'));

module.exports = router;
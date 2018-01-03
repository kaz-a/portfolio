const router = require('express').Router();

router.use('/projects', require('./projects'));
// router.use('/about', require('/about'));

module.exports = router;
const router = require('express').Router();

router.use('/projects', require('./projects'));
// router.use('/about', require('/about'));
router.use('/contact', require('./contact'));

module.exports = router;
const router = require('express').Router();
const Work = require('../db/Work');

router.get('/', (req, res, next) => {
  Work.findAll()
    .then(work => res.send(work))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Work.create(req.body)
    .then(work => res.send(work))
    .catch(next);
})

module.exports = router;
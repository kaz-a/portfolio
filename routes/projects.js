const router = require('express').Router();
const Project = require('../db/Project');

router.get('/', (req, res, next) => {
  Project.findAll()
    .then(project => res.send(project))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Project.create(req.body)
    .then(project => res.send(project))
    .catch(next);
})

module.exports = router;
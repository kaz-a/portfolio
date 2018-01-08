const router = require('express').Router();
const Project = require('../db/Project');
const Detail = require('../db/Detail');

router.get('/', (req, res, next) => {
  Project.findAll({ include: [ Detail ]})
    .then(projects => res.send(projects))
    .catch(next)
})

// router.get('/:id', (req, res, next) => {
//   Project.findById(+req.params.id)  
//     .then(project => {
//       console.log('project', project)
//     })
//     .then(project => res.send(project))
//     .catch(next)
// })

router.post('/', (req, res, next) => {
  Project.create(req.body)
    .then(project => res.send(project))
    .catch(next);
})

module.exports = router;
const db = require('./conn'),
  Project = require('./Project');

db.sync({ force: true })
.then(() => {
  return Promise.all([
    Project.create({ name: 'speeek', description: 'Transcribing app', imageUrl: '../assets/images/speeek1.png' })
  ])
})
.catch(err => console.log(err))

module.exports = {
  db, Project
}
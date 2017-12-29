const db = require('./conn'),
  Work = require('./Work');

db.sync({ force: true })
.then(() => {
  return Promise.all([
    Work.create({ name: 'speeek', description: 'Transcribing app', imageUrl: '../assets/images/speeek1.png' })
  ])
})
.catch(err => console.log(err))

module.exports = {
  db, Work
}
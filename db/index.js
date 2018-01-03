const db = require('./conn'),
  Project = require('./Project');

db.sync({ force: true })
.then(() => {
  return Promise.all([
    Project.create({ name: 'Speeek', description: 'Speech Pattern Analysis App', imageUrl: '/images/speeek.png' }),
    Project.create({ name: 'dita', description: 'Idea Journaling/Sharing App', imageUrl: '/images/dita.png' }), 
    Project.create({ name: 'nyccas', description: 'NYC Real-time Air Quality App', imageUrl: '/images/nyccas.png' }),
    Project.create({ name: 'Wayne Warehouse', description: 'Fictitious E-Commerce Site', imageUrl: '/images/waynewarehouse.png' }),
    Project.create({ name: 'Daycare Finder', description: 'NYC Daycare Map', imageUrl: '/images/daycarefinder.png' }),
    Project.create({ name: 'PM2.5 Infographic', description: 'NYC PM2.5 Interactive Data Story', imageUrl: '/images/pm25.png' })
  ])
})
.catch(err => console.log(err))

module.exports = {
  db, Project
}
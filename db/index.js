const db = require('./conn'),
  Project = require('./Project');

db.sync({ force: true })
.then(() => {
  return Promise.all([
    Project.create({ name: 'Speeek', description: 'Speech Pattern Analysis App', imageUrl: '/images/collage.jpg' }),
    Project.create({ name: 'dita', description: 'Idea Journaling/Sharing App', imageUrl: '/images/print.jpg' }), 
    Project.create({ name: 'nyccas', description: 'NYC Real-time Air Quality App', imageUrl: '/images/report.jpg' }),
    Project.create({ name: 'Wayne Warehouse', description: 'Fictitious E-Commerce Site', imageUrl: '/images/book.jpg' }),
    Project.create({ name: 'Daycare Finder', description: 'NYC Daycare Map', imageUrl: '/images/map.jpg' }),
    Project.create({ name: 'PM2.5 Infographic', description: 'NYC PM2.5 Interactive Data Story', imageUrl: '/images/infographic.jpg' })
  ])
})
.catch(err => console.log(err))

module.exports = {
  db, Project
}
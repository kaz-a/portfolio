const db = require('./conn'),
  Project = require('./Project'),
  Detail = require('./Detail');

Detail.belongsTo(Project);


db.sync({ force: true })
.then(() => {
  return Promise.all([
    Project.create({ name: 'Speeek', description: 'Speech Pattern Analysis App', imageUrl: '/images/collage.jpg' }),
    Project.create({ name: 'dita', description: 'Idea Journaling/Sharing App', imageUrl: '/images/print.jpg' }), 
    Project.create({ name: 'nyccas', description: 'NYC Real-time Air Quality App', imageUrl: '/images/report.jpg' }),
    Project.create({ name: 'Wayne Warehouse', description: 'Fictitious E-Commerce Site', imageUrl: '/images/book.jpg' }),
    Project.create({ name: 'PM2.5 Infographic', description: 'NYC PM2.5 Interactive Data Story', imageUrl: '/images/infographic.jpg' }),
    Project.create({ name: 'Daycare Finder', description: 'NYC Daycare Map', imageUrl: '/images/map.jpg' }),
    Project.create({ name: 'Dog Names', description: 'NYC Dog Names', imageUrl: '/images/dognames.jpg' }),    
    Project.create({ name: 'Grafiti App', description: 'UX design for Grafiti', imageUrl: '/images/grafiti.jpg' }),
    Project.create({ name: 'Microsoft', description: 'Microsoft Data Visualization', imageUrl: '/images/microsoft.jpg' }),

    Detail.create({ title: 'Speeek', description: 'Speech Pattern Analysis App', images: ['/images/collage.jpg', '/images/print.jpg'], githubUrl: 'https://github.com/kaz-a/stackathon', publicUrl: 'https://speeek.herokuapp.com/' }), 
    Detail.create({ title: 'dita', description: 'Idea Journaling/Sharing App', images: ['/images/print.jpg', '/images/collage.jpg'], githubUrl: 'https://github.com/rivermanvr/dita', publicUrl: 'dita-capstone.herokuapp.com' }),
    Detail.create({ title: 'nyccas', description: 'NYC Real-time Air Quality Monitoring App', images: ['/images/report.jpg', '/images/book.jpg'], githubUrl: 'https://github.com/kaz-a/nyccas_node', publicUrl: 'http://nyccas.herokuapp.com/internal' }),
    Detail.create({ title: 'Wayne Warehouse', description: 'Fictitious E-Commerce Site', images: ['/images/book.jpg', '/images/infographic.jpg'], githubUrl: 'https://github.com/theonlymikeever/waynewarehouse', publicUrl: 'https://wayne-ware.herokuapp.com/#/' }),
    Detail.create({ title: 'PM2.5 Infogrpahic', description: 'NYC PM2.5 Interactive Data Story', images: ['/images/infographic.jpg', '/images/map.jpg'], githubUrl: 'https://github.com/kaz-a/pm25_infographic', publicUrl: 'http://bl.ocks.org/kaz-a/raw/9152e844e6e3f91f2cf4002b12ba14c9/' }),
    Detail.create({ title: 'Daycare Finder', description: 'NYC Daycare Map', images: ['/images/map.jpg', '/images/dognames.jpg'], githubUrl: 'https://github.com/kaz-a/daycare_finder', publicUrl: 'http://bl.ocks.org/kaz-a/raw/ebd427d851ecb85c24ae/' }),
    Detail.create({ title: 'Dog Names', description: 'NYC Dog Names', images: ['/images/dognames.jpg', '/images/grafiti.jpg'], githubUrl: 'https://github.com/kaz-a/dog_names', publicUrl: 'http://a816-dohbesp.nyc.gov/IndicatorPublic/dognames/' }),
    Detail.create({ title: 'Grafiti App', description: 'UX design for Grafiti', images: ['/images/grafiti.jpg', '/images/microsoft.jpg'] }),
    Detail.create({ title: 'Microsoft', description: 'Microsoft Data Visualization', images: ['/images/microsoft.jpg'] })
  ])
})
.then(([_p1, _p2, _p3, _p4, _p5, _p6, _p7, _p8, _p9, _d1, _d2, _d3, _d4, _d5, _d6, _d7, _d8, _d9]) => {
  return Promise.all([
    _d1.setProject(_p1),
    _d2.setProject(_p2),
    _d3.setProject(_p3),
    _d4.setProject(_p4),
    _d5.setProject(_p5),
    _d6.setProject(_p6),
    _d7.setProject(_p7),
    _d8.setProject(_p8),
    _d9.setProject(_p9)
  ])
})
.catch(err => console.log(err))

module.exports = {
  db, Project, Detail
}
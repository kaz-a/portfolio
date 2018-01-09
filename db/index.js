const db = require('./conn'),
  Project = require('./Project'),
  Detail = require('./Detail');

Detail.belongsTo(Project);
Project.hasOne(Detail);


const speeekDesc = 'Speeek is an app that listens to your speech, transcribes, and let you know when you are saying positive or negative words. It also gives you an analysis of your speech pattern in a nice d3 graph! This was a sole hackathon project, that received the first prize!',
  ditaDesc = 'some description about dita',
  nyccasDesc = 'some description about nyccas',
  wayneDesc = 'some description about wayne warehouse',
  pmDesc = 'some description about pm2.5 infographic',
  daycareDesc = 'some description about daycare finder';

const speeekCaptions = ['Speak into the app and it will transcribe what you say and tell you what positive/negative words were said.', 
  'Search/add a new custom word to our negative/positive word list, so when you speak that word, the app will let you know!', 
  'Click on "Analyze" to visuazlie your words in a chart!']

const ditaCaptions = ['caption1', 'caption2']
const nyccasCaptions = ['caption1', 'caption2']
const wayneCaptions = ['caption1', 'caption2']
const pmCaptions = ['caption1', 'caption2']
const daycareCaptions = ['caption1', 'caption2']


db.sync({ force: true })
.then(() => {
  return Promise.all([
    Project.create({ name: 'Speeek', description: 'Speech Pattern Analysis App', imageUrl: '/images/collage.jpg' }),
    Project.create({ name: 'dita', description: 'Idea Journaling/Sharing App', imageUrl: '/images/print.jpg' }), 
    Project.create({ name: 'nyccas', description: 'NYC Real-time Air Quality App', imageUrl: '/images/report.jpg' }),
    Project.create({ name: 'Wayne Warehouse', description: 'Fictitious E-Commerce Site', imageUrl: '/images/book.jpg' }),
    Project.create({ name: 'PM2.5 Infographic', description: 'NYC PM2.5 Interactive Data Story', imageUrl: '/images/infographic.jpg' }),
    Project.create({ name: 'Daycare Finder', description: 'NYC Daycare Map', imageUrl: '/images/map.jpg' }),

    Detail.create({ desc: speeekDesc, images: ['/images/speeek1.png', '/images/speeek2.png', '/images/speeek3.png'], captions: speeekCaptions, githubUrl: 'https://github.com/kaz-a/stackathon', publicUrl: 'https://speeek.herokuapp.com/' }), 
    Detail.create({ desc: ditaDesc, images: ['/images/print.jpg', '/images/collage.jpg'], captions: ditaCaptions, githubUrl: 'https://github.com/rivermanvr/dita', publicUrl: 'dita-capstone.herokuapp.com' }),
    Detail.create({ desc: nyccasDesc, images: ['/images/report.jpg', '/images/book.jpg'], captions: nyccasCaptions, githubUrl: 'https://github.com/kaz-a/nyccas_node', publicUrl: 'http://nyccas.herokuapp.com/internal' }),
    Detail.create({ desc: wayneDesc, images: ['/images/book.jpg', '/images/infographic.jpg'], captions: wayneCaptions, githubUrl: 'https://github.com/theonlymikeever/waynewarehouse', publicUrl: 'https://wayne-ware.herokuapp.com/#/' }),
    Detail.create({ desc: pmDesc, images: ['/images/infographic.jpg', '/images/map.jpg'], captions: pmCaptions, githubUrl: 'https://github.com/kaz-a/pm25_infographic', publicUrl: 'http://bl.ocks.org/kaz-a/raw/9152e844e6e3f91f2cf4002b12ba14c9/' }),
    Detail.create({ desc: daycareDesc, images: ['/images/map.jpg', '/images/dognames.jpg'], captions: daycareCaptions, githubUrl: 'https://github.com/kaz-a/daycare_finder', publicUrl: 'http://bl.ocks.org/kaz-a/raw/ebd427d851ecb85c24ae/' })    
  ])
})
.then(([_p1, _p2, _p3, _p4, _p5, _p6, _d1, _d2, _d3, _d4, _d5, _d6]) => {
  return Promise.all([
    _d1.setProject(_p1),
    _d2.setProject(_p2),
    _d3.setProject(_p3),
    _d4.setProject(_p4),
    _d5.setProject(_p5),
    _d6.setProject(_p6)
  ])
})
.catch(err => console.log(err))

module.exports = {
  db, Project, Detail
}
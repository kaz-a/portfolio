const db = require('./conn'),
  Project = require('./Project'),
  Detail = require('./Detail');

Detail.belongsTo(Project);
Project.hasOne(Detail);


const speeekDesc = 'Speeek is an app that listens to your speech, transcribes, and let you know when you are saying positive or negative words. It also gives you an analysis of your speech pattern in a nice d3 graph! This was a sole hackathon project that received the first prize! Implemented with Express.js, Sequelize.js, Postgresql, React/Redux, d3.js',
  ditaDesc = 'dita stands for "dreams", "ideas", "thoughs", "actions". It is a social media site where people can share their daily thoughts from wherever their location is. The thoughts are posted as blinking colorful stars that can be clicked to see details. Registered users have access to their user dashboard where they can manage posts/storylines, as well as view stats. This is a team project where I contributed mainly to the map and analytics. Implemented with Express.js, Sequelize.js, Postgresql, React/Redux, Leaflet/Mapbox, SCSS, python (for seeding large amount of fake data).',
  wayneDesc = 'WayneWarehouse is a fictitous e-commerce site that sells all the products that appears in popular movies. If you are looking for Banes Mask, you can purchase it for just $44,995 on this site! This is a team project where I contributed on the entire Admin dashboard. Major technologies used are Express.js, Sequelize.js, Postgresql, React/Redux',
  nyccasDesc = 'Air Quality Monitoring app to visualize real-time pm2.5 readings in NYC. An ongoing project at NYC Department of Health. I have been the sole developer for this project. Currently in the process of redesigning the user experience, as well as re-evaluating the technologies used (see the GITHUB LINK for details)',  
  pmDesc = 'An infographic explaining how the traffic in NYC is affecting the air quality (pm2.5 concentrations) and health. This was featured on the nyc.gov homepage during the climate week 2016 and received a great recognition from the public and CDC. The charts and animations were all built with d3.js. I was the sole designer/developer on this project.',
  daycareDesc = 'Daycare finder app for NYC Department of Health for internal inspection use. My first javascript/d3.js project in 2015!';

const speeekCaptions = ['Speak into the app and it will transcribe what you say and tell you what positive/negative words were said.', 
  'Search/add a new custom word to our negative/positive word list, so when you speak that word, the app will let you know!', 
  'Click on "Analyze" to visuazlie your words in a chart!']

const ditaCaptions = ['Home page - Guest user can enter his/her location', 
  'View the map with all the user posts as stars! The stars are color-coded and blinking - the most trending as blue, new posts as yellow, fading posts as orange and shrinking as red - just like the real stars!',
  'Click on a star to see the post at that location',
  'See all posts by a specific user as a guest!',
  'Registered user has access to the dashboard where s/he can see all posts',
  'Registered user can also change/add new locations where the posts appear',
  'Registered user gets a nice analytics showing all of their visitors!'
  ]
const wayneCaptions = ['Homepage', 'Our product page', 'Product detail with review form', 'Admin section for adding a new product', 'User list for admin use', 'Order list for admin use']
const nyccasCaptions = ['Click on a circle data point on the map to show the time trend chart. Map theme changes based on the day - this is a daytime theme.', 'Night theme', 'Weather is a major factor for pm2.5 values. This page shows the current weather in NYC.', 'Real-time Air Quality Index values scraped from the enviroflash site.', 'About', 'Old version of the app', 'Old version - scrolled down']
const pmCaptions = ['Intro with d3 particle animations!', 'Manually drawn d3 circles and labels', 'Clickable/zoomable sunburst with rotated labels - you can click on a label and see it animate to change to...', 'a new donut chart!', 'Static GIS maps with selections', 'Hoverable d3 stack barchart', 'Drawings!', 'Interactive map with stacked barchart ordered by poverty rank.', 'Hover on a map to show the information for just that neighborhood, or hover on a stacked bar chart to show details!']
const daycareCaptions = ['Leaflet map with marker cluster', 'Zoomed in to show data points', 'Filtered by modality', 'Thematic map overlay of poverty data (to show relationship between poverty and daycare locations)', 'Another version of daycare finder with different design', 'Poverty data overlay', 'Data points shown as home icons!']


db.sync({ force: true })
.then(() => {
  return Promise.all([
    Project.create({ name: 'Speeek', description: 'Speech Pattern Analysis App', imageUrl: '/images/speeek.png' }),
    Project.create({ name: 'dita', description: 'Idea Journaling/Sharing App', imageUrl: '/images/dita.png' }), 
    Project.create({ name: 'Wayne Warehouse', description: 'Fictitious E-Commerce Site', imageUrl: '/images/wayne.png' }),
    Project.create({ name: 'NYCCAS', description: 'NYC Real-time Air Quality App', imageUrl: '/images/nyccas.png' }),    
    Project.create({ name: 'PM2.5 Infographic', description: 'NYC PM2.5 Interactive Data Story', imageUrl: '/images/pm.png' }),
    Project.create({ name: 'Daycare Finder', description: 'NYC Daycare Map', imageUrl: '/images/daycare.png' }),

    Detail.create({ desc: speeekDesc, images: ['/images/speeek1.png', '/images/speeek2.png', '/images/speeek3.png'], captions: speeekCaptions, githubUrl: 'https://github.com/kaz-a/stackathon', publicUrl: 'https://speeek.herokuapp.com/' }), 
    Detail.create({ desc: ditaDesc, images: ['/images/dita1.png', '/images/dita2.png', '/images/dita3.png', '/images/dita4.png', '/images/dita5.png', '/images/dita6.png', '/images/dita7.png'], captions: ditaCaptions, githubUrl: 'https://github.com/rivermanvr/dita', publicUrl: 'https://dita-capstone.herokuapp.com' }),
    Detail.create({ desc: wayneDesc, images: ['/images/wayne1.png', '/images/wayne2.png', '/images/wayne3.png', '/images/wayne4.png', '/images/wayne5.png', '/images/wayne6.png'], captions: wayneCaptions, githubUrl: 'https://github.com/theonlymikeever/waynewarehouse', publicUrl: 'https://wayne-ware.herokuapp.com/#/' }),
    Detail.create({ desc: nyccasDesc, images: ['/images/nyccasday.png', '/images/nyccasnight.png', '/images/nyccasweather.png', '/images/nyccasaqi.png', '/images/nyccasabout.png', '/images/nyccas1.png', '/images/nyccas2.png', ], captions: nyccasCaptions, githubUrl: 'https://github.com/kaz-a/nyccas-react', publicUrl: 'https://nyccas-react.herokuapp.com/' }),
    Detail.create({ desc: pmDesc, images: ['/images/pm1.png', '/images/pm2.png', '/images/pm3.png', '/images/pm4.png', '/images/pm5.png', '/images/pm6.png', '/images/pm7.png', '/images/pm8.png', '/images/pm9.png'], captions: pmCaptions, githubUrl: 'https://github.com/kaz-a/pm25_infographic', publicUrl: 'http://bl.ocks.org/kaz-a/raw/9152e844e6e3f91f2cf4002b12ba14c9/' }),
    Detail.create({ desc: daycareDesc, images: ['/images/daycare1.png', '/images/daycare2.png', '/images/daycare3.png', '/images/daycare4.png', '/images/daycare5.png', '/images/daycare6.png', '/images/daycare7.png'], captions: daycareCaptions, githubUrl: 'https://github.com/kaz-a/daycare_finder', publicUrl: 'http://bl.ocks.org/kaz-a/raw/ebd427d851ecb85c24ae/' })    
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
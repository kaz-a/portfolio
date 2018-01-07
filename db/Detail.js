const Sequelize = require('sequelize'),
  db = require('./conn');

const Detail = db.define('detail', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }, 
  images: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  githubUrl: {
    type: Sequelize.STRING
  },
  publicUrl: {
    type: Sequelize.STRING
  },
  otherUrl: {
    type: Sequelize.STRING
  }
})

module.exports = Detail;
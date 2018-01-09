const Sequelize = require('sequelize'),
  db = require('./conn');

const Detail = db.define('detail', {
  desc: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  images: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  captions: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
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
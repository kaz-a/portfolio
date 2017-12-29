const Sequelize = require('sequelize'),
  db = require('./conn');

const Work = db.define('work', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Work;
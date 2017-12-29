const Sequelize = require('sequelize'),
  db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/portfolio', { logging: false }),
  chalk = require('chalk');

console.log(chalk.cyan(`database connecting to ${ db.config.database }`))

module.exports = db;
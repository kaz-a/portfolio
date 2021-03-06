const express = require('express'),
  app = express(),
  chalk = require('chalk'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  path = require('path'),
  db = require('./db'),
  port = process.env.PORT || 3000;

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'));

app.use('/api', require('./routes'));

app.get('/*', (req, res, next) => res.sendFile(path.join(__dirname, '/public/index.html')));
app.use('/', (err, req, res, next) => {
  console.log(err);
  res.status(err.status).send(err.message);
});

app.listen(port, () => {
  console.log(chalk.cyan(`server listening on port ${port}...`))
})
var express = require('express');
var mongoose = require('mongoose');
var tunnel = require('tunnel-ssh');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var morgan = require('morgan');
var cors = require('cors');
var config = {
  username: 'wainaina',
  host: 'sbsrv1.cs.nuim.ie',
  port: 22,
  dstPort: 27017,
  password: 'H.enr_y77'
};
var server = tunnel(config, function(error, server) {
  if (error) {
    console.log("SSH connection error: " + error);
  }
  mongoose.connect('mongodb://localhost:27017/wainaina');
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'DB connection error:'));
  app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use('/', router);
require('./app/route')(router);
app.listen(4500);
console.log("Node server running on http://localhost:4500");
});
exports = module.exports = app;

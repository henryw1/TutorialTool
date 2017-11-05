var express = require('express');
var mongoose = require('mongoose');
var tunnel = require('tunnel-ssh');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var morgan = require('morgan');
var cors = require('cors');
// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//   	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
//     next();
// });
var config = {
  username: 'wainaina',
  host: 'sbsrv1.cs.nuim.ie',
  //agent : process.env.SSH_AUTH_SOCK,
  //privateKey:require('fs').readFileSync('/Users/myusername/.ssh/id_rsa'),
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

/* USAR RUTAS */
app.use('/', router);
require('./app/route')(router);
/* Puerto */
app.listen(4500);
console.log("Node server running on http://localhost:4500");

});


//app.listen('4500');
exports = module.exports = app;

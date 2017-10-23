var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/wainaina";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  // db.collection("customers").findOne({}, function(err, result) {
  //   if (err) throw err;
  //   console.log(result.name);
  //   db.close();
  // });
});

//mongoose.connect(await mongod.getConnectionString(), { useMongoClient: true })
// mongoose.connect('mongodb://localhost');

var noteSchema = new mongoose.Schema({
	title: 'string',
	content: 'string',
	author: 'string'
});

var NoteModel = mongoose.model('note',noteSchema);
//New lines!
app.get('/api/',function(req,res) {
	res.send('Working');
});

app.listen('4500');

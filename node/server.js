var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/emberData";
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   db.collection("customers").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     db.close();
//   });
// });

mongoose.connect('mongodb://localhost:27017/wainaina', function(err){
if (err)
{
//  throw console.error();
} else {
  console.log("connected ");
  var noteSchema = new mongoose.Schema(
    {
  	id: String,
  	value: Number,
  	ts: String
  }
  // { collection: 'notes' }

  );
  //var collectionName='note';
  //noteSchema.set('collection', 'note');

  var NoteModel = mongoose.model('testData',noteSchema, 'testData');
  //  New lines!
  // app.get('/api/notes',function(req,res) {
  // 	res.send('Working');
  // });
  app.get('/api/test', function(req,res) {
    	NoteModel.find({},function(err,docs) {
  		if(err) {
        console.log("error");
        //res.send('Working');
        res.send({error:err});
  		}
  		else {
        console.log(docs);
        res.send(docs);

  		}
  	});
  });
}

});

app.listen('4500');

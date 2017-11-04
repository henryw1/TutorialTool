var express = require('express');
var mongoose = require('mongoose');
var tunnel = require('tunnel-ssh');
var app = express();
var router = express.Router();
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});
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
  db.once('open', function() {
    // we're connected!
    console.log("DB connection successful");
    //var collection = db.collection('testData');
    var noteSchema = new mongoose.Schema({
      name: 'String',
      key: 'String',
      session: 'String'
    });
    var NoteModel = mongoose.model('students', noteSchema, 'students');

    app.get('/api/students', function(req, res1) {
      NoteModel.find({}, function(err, docs) {
        if (err) {
          console.log("error");
          res1.send({
            error: err
          });
        } else {
          console.log(docs);
          res1.send(JSON.stringify({student:docs}));

        }
      });
    });
    var studentModel = mongoose.model('lecturers', noteSchema, 'lecturers');
    app.get('/api/lecturers', function(req, res) {
      studentModel.find({}, function(err, docs) {
        if (err) {
          console.log("error");
          res.send({
            error: err
          });
        } else {
          console.log(docs);
          res.send(JSON.stringify({lecturer:docs}));

        }
      });
     });

     module.exports.addStudent = function(req,res) {
    var student = new Student(req.body.student);
    student.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json({student: student});
    });
};
     router.route('/login').post(function(req, res) { students.addStudent(req,res); })
                                   .get(function(req,res) { students.getAllStudent(req,res) });


  });
});

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/emberData";
//
// MongoClient.connect(url, function(err, db) {
//   var collection = db.collection('notes');
// if (err) throw err;
// var myobj = { title: "Testing", content:"lorem random stuff that dont make sense", author: "John Doe"};
// collection.insertOne(myobj, function(err, res) {
//   if (err) throw err;
//   console.log("1 document inserted");
// });
// console.log(collection);
//   var query= {};
//   collection.find(query).toArray(function(err, result) {
//     if (err) throw err;
//      console.log("<pre>");
//      console.log(result);
//      console.log("</pre>");
//     db.close();
//   });
// });


// mongoose.connect('mongodb://localhost:27017/wainaina', function(err){
// if (err)
// {
//
// } else {
//   console.log("connected ");
//   var noteSchema = new mongoose.Schema(
//     {
//   	id: String,
//   	value: Number,
//   	ts: String
//   }
//   );
//   var NoteModel = mongoose.model('testData',noteSchema, 'testData');
//   app.get('/api/test', function(req,res) {
//     	NoteModel.find({},function(err,docs) {
//   		if(err) {
//         console.log("error");
//         res.send({error:err});
//   		}
//   		else {
//         console.log(docs);
//         res.send(docs);
//
//   		}
//   	});
//   });
// }
//
// });

app.listen('4500');
exports = module.exports = app;

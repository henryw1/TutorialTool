var Question = require('../models/question');

/* Enviara la lista de notas en una variable 'note' */
module.exports.getAllNotes = function (req, res) {
    Question.find({}, function (err, docs) {
        if (err) res.send(err)
        //console.log(docs);
        res.send({
            question: docs
        });
    });
};

/* Buscara la nota gracias a req.params.note_id y nos devolvera
la nota en una variable 'note' */
module.exports.getIdNote = function (req, res) {
    Question.findById(req.params.question_id, function (err, docs) {
        if (err) res.send(err);
        //console.log(docs);
        res.send({
            question: docs
        });
    });
};

/* Eliminado de nota */
module.exports.deleteNote = function (req, res) {
    Question.findById(req.params.question_id, function (err, elem) {
        if (err) res.send(err);
        elem.remove(function (err, docs) {
            if (err) res.send(err);
          //  console.log(docs);
            res.send({
                question: docs
            });
        });
    });
};

/* Salvar nota */
module.exports.addNote = function (req, res) {
    var question = new Question(req.body.question);
    question.save(function (err, elem) {
        if (err) res.send(err);
        //console.log(elem);
        res.send({
            question: elem
        });
    });
};

/* Modificar nota ($set: req.body.note) */
module.exports.saveNote = function (req, res) {
    Question.findByIdAndUpdate(req.params.question_id, {
        $set: req.body.question
    }, function (err, elem) {
        if (err) res.send(err);
       console.log(elem);
        res.send({
            question: elem
        });
    });
};

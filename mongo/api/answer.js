var Answer = require('../models/answer');

/* Enviara la lista de notas en una variable 'note' */
module.exports.getAllNotes = function (req, res) {
    Answer.find({}, function (err, docs) {
        if (err) res.send(err)
        //console.log(docs);
        res.send({
            answer: docs
        });
    });
};

/* Buscara la nota gracias a req.params.note_id y nos devolvera
la nota en una variable 'note' */
module.exports.getIdNote = function (req, res) {
    Answer.findById(req.params.answer_id, function (err, docs) {
        if (err) res.send(err);
        //console.log(docs);
        res.send({
            answer: docs
        });
    });
};

/* Eliminado de nota */
module.exports.deleteNote = function (req, res) {
    Answer.findById(req.params.answer_id, function (err, elem) {
        if (err) res.send(err);
        elem.remove(function (err, docs) {
            if (err) res.send(err);
          //  console.log(docs);
            res.send({
                answer: docs
            });
        });
    });
};

/* Salvar nota */
module.exports.addNote = function (req, res) {
    var answer = new Answer(req.body.answer);
    answer.save(function (err, elem) {
        if (err) res.send(err);
        //console.log(elem);
        res.send({
            answer: elem
        });
    });
};

/* Modificar nota ($set: req.body.note) */
module.exports.saveNote = function (req, res) {
    Answer.findByIdAndUpdate(req.params.answer_id, {
        $set: req.body.answer
    }, function (err, elem) {
        if (err) res.send(err);
       console.log(elem);
        res.send({
            answer: elem
        });
    });
};

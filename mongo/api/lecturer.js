var Lecturer = require('../models/lecturer');

/* Enviara la lista de notas en una variable 'note' */
module.exports.getAllNotes = function (req, res) {
    Lecturer.find({}, function (err, docs) {
        if (err) res.send(err)
        console.log(docs);
        res.send({
            lecturer: docs
        });
    });
};

/* Buscara la nota gracias a req.params.note_id y nos devolvera
la nota en una variable 'note' */
module.exports.getIdNote = function (req, res) {
    Lecturer.findById(req.params.lecturer_id, function (err, docs) {
        if (err) res.send(err);
        console.log(docs);
        res.send({
            lecturer: docs
        });
    });
};

/* Eliminado de nota */
module.exports.deleteNote = function (req, res) {
    Lecturer.findById(req.params.lecturer_id, function (err, elem) {
        if (err) res.send(err);
        elem.remove(function (err, docs) {
            if (err) res.send(err);
            console.log(docs);
            res.send({
                lecturer: docs
            });
        });
    });
};

/* Salvar nota */
module.exports.addNote = function (req, res) {
    var note = new Note(req.body.lecurer);
    note.save(function (err, elem) {
        if (err) res.send(err);
        console.log(elem);
        res.send({
            lecturer: elem
        });
    });
};

/* Modificar nota ($set: req.body.note) */
module.exports.saveNote = function (req, res) {
    Lecturer.findByIdAndUpdate(req.params.lecturer_id, {
        $set: req.body.note
    }, function (err, elem) {
        if (err) res.send(err);
        console.log(elem);
        res.send({
            lecturer: elem
        });
    });
};

var Note = require('../models/note');

/* Enviara la lista de notas en una variable 'note' */
module.exports.getAllNotes = function (req, res) {
    Note.find({}, function (err, docs) {
        if (err) res.send(err)
        console.log(docs);
        res.send({
            note: docs
        });
    });
};

/* Buscara la nota gracias a req.params.note_id y nos devolvera
la nota en una variable 'note' */
module.exports.getIdNote = function (req, res) {
    Note.findById(req.params.note_id, function (err, docs) {
        if (err) res.send(err);
        console.log(docs);
        res.send({
            note: docs
        });
    });
};

/* Eliminado de nota */
module.exports.deleteNote = function (req, res) {
    Note.findById(req.params.note_id, function (err, elem) {
        if (err) res.send(err);
        elem.remove(function (err, docs) {
            if (err) res.send(err);
            console.log(docs);
            res.send({
                note: docs
            });
        });
    });
};

/* Salvar nota */
module.exports.addNote = function (req, res) {
    var note = new Note(req.body.note);
    note.save(function (err, elem) {
        if (err) res.send(err);
        console.log(elem);
        res.send({
            note: elem
        });
    });
};

/* Modificar nota ($set: req.body.note) */
module.exports.saveNote = function (req, res) {
    Note.findByIdAndUpdate(req.params.note_id, {
        $set: req.body.note
    }, function (err, elem) {
        if (err) res.send(err);
        console.log(elem);
        res.send({
            note: elem
        });
    });
};

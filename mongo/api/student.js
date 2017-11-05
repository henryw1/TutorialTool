var Student = require('../models/student');

/* Enviara la lista de notas en una variable 'note' */
module.exports.getAllNotes = function (req, res) {
    Student.find({}, function (err, docs) {
        if (err) res.send(err)
        console.log(docs);
        res.send({
            student: docs
        });
    });
};

/* Buscara la nota gracias a req.params.note_id y nos devolvera
la nota en una variable 'note' */
module.exports.getIdNote = function (req, res) {
    student.findById(req.params.student_id, function (err, docs) {
        if (err) res.send(err);
        console.log(docs);
        res.send({
            student: docs
        });
    });
};

/* Eliminado de nota */
module.exports.deleteNote = function (req, res) {
    Student.findById(req.params.student_id, function (err, elem) {
        if (err) res.send(err);
        elem.remove(function (err, docs) {
            if (err) res.send(err);
            console.log(docs);
            res.send({
                student: docs
            });
        });
    });
};

/* Salvar nota */
module.exports.addNote = function (req, res) {
    var student = new Student(req.body.student);
    student.save(function (err, elem) {
        if (err) res.send(err);
        console.log(elem);
        res.send({
            student: elem
        });
    });
};

/* Modificar nota ($set: req.body.note) */
module.exports.saveNote = function (req, res) {
    Student.findByIdAndUpdate(req.params.student_id, {
        $set: req.body.student
    }, function (err, elem) {
        if (err) res.send(err);
        console.log(elem);
        res.send({
            student: elem
        });
    });
};

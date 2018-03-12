var Answer = require('../models/answer');

module.exports.getAllNotes = function (req, res) {
    Answer.find({}, function (err, docs) {
        if (err) res.send(err)
            res.send({
            answer: docs
        });
    });
};
module.exports.getIdNote = function (req, res) {
    Answer.findById(req.params.answer_id, function (err, docs) {
        if (err) res.send(err);
        res.send({
            answer: docs
        });
    });
};

module.exports.deleteNote = function (req, res) {
    Answer.findById(req.params.answer_id, function (err, elem) {
        if (err) res.send(err);
        elem.remove(function (err, docs) {
            if (err) res.send(err);
            res.send({
                answer: docs
            });
        });
    });
};
module.exports.addNote = function (req, res) {
    var answer = new Answer(req.body.answer);
    answer.save(function (err, elem) {
        if (err) res.send(err);
        res.send({
            answer: elem
        });
    });
};

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


var students = require('../api/student');
var lecturers = require('../api/lecturer');
var questions = require('../api/question');

module.exports = function (router) {

    /* Ruta de listado de nota (get) y salvado de nuevas notas (post) */
    router.route('/api/students').get(function (req, res) {
            students.getAllNotes(req, res)
        })
        .post(function (req, res) {
            students.addNote(req, res)
        });
        router.route('/api/lecturers').get(function (req, res) {
                lecturers.getAllNotes(req, res)
            })
            .post(function (req, res) {
                lecturers.addNote(req, res)
            });
            router.route('/api/questions').get(function (req, res) {
                    questions.getAllNotes(req, res)
                })
                .post(function (req, res) {
                    questions.addNote(req, res)
                });

    /* Ruta de borrado (delete) y modificado (patch) */
    router.route('/api/lecturers/:lecturer_id').get(function (req, res) {
            lecturers.getIdNote(req, res)
        })
        .delete(function (req, res) {
            lecturers.deleteNote(req, res)
        })
        .patch(function (req, res) {
            lecturers.saveNote(req, res)
        });

        router.route('/api/students/:student_id').get(function (req, res) {
                students.getIdNote(req, res)
            })
            .delete(function (req, res) {
                students.deleteNote(req, res)
            })
            .patch(function (req, res) {
                students.saveNote(req, res)
            });

            router.route('/api/questions/:question_id').get(function (req, res) {
                    questions.getIdNote(req, res)
                })
                .delete(function (req, res) {
                    questions.deleteNote(req, res)
                })
                .patch(function (req, res) {
                    questions.saveNote(req, res)
                });
};

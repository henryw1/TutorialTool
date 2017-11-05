
var students = require('../api/student');
var lecturers = require('../api/lecturer');

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

    /* Ruta de borrado (delete) y modificado (patch) */
    // router.route('/api/notes/:note_id').get(function (req, res) {
    //         notes.getIdNote(req, res)
    //     })
    //     .delete(function (req, res) {
    //         notes.deleteNote(req, res)
    //     })
    //     .patch(function (req, res) {
    //         notes.saveNote(req, res)
    //     });
};

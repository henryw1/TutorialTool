// models/note.js
mongoose = require('mongoose');
/* Usaremos un modelo 'note' con tres campos strings */
var noteSchema = new mongoose.Schema({
	question: 'string',
	student: 'string',
	lecturer:"string",
	answer:"string",
	id:"string",
});
module.exports = mongoose.model('answer',noteSchema);

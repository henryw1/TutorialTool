// models/note.js
mongoose = require('mongoose');
/* Usaremos un modelo 'note' con tres campos strings */
var noteSchema = new mongoose.Schema({
	name: 'string',
	answer: 'string',
	id:'string',
	newans:'string',
	session:'string',
});
module.exports = mongoose.model('student',noteSchema);

// models/note.js
mongoose = require('mongoose');
/* Usaremos un modelo 'note' con tres campos strings */
var noteSchema = new mongoose.Schema({
	title: 'string',
	lecturer: 'string',
	question : 'string',
	id:"string",
});
module.exports = mongoose.model('question',noteSchema);

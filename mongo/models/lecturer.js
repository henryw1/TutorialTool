// models/note.js
mongoose = require('mongoose');
/* Usaremos un modelo 'note' con tres campos strings */
var noteSchema = new mongoose.Schema({
	name: 'string',
	key: 'string',
  session: 'string',
	question : 'string',
	title: 'string',
	id:"string",
});
module.exports = mongoose.model('lecturer',noteSchema);

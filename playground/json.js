// var obj = {
// 	name: "Hemant Jain",
// 	age: 18
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var string = '{"name": "Hemant","age": 18}';
// var person = JSON.parse(string);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
	title: "Gulliver Travels",
	body: "I am a great book, read me!"
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(`Title: ${note.title}`);
console.log(`Description: ${note.body}`);
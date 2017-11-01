console.log("Starting App");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

command = process.argv[2];
const argv = yargs.argv;

if(command === 'add'){
	notes.addNote(argv.title,argv.body);
}else if(command === 'list'){
	notes.getAll();
}else if(command === 'read'){
	notes.readNote(argv.title);
}else if(command === 'remove'){
	notes.removeNote();
}else{
	console.log("Not a valid argument");
}

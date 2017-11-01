console.log("Starting Notes.js");

var addNote = (title,body) => {
	console.log(`Adding Note, Title:${title}, Description:${body}`);
};

var getAll = () => {
	console.log("Getting All The Notes");
};

var readNote = (title) => {
	console.log(`Opening The Note titled:${title}`);
};

var removeNote = () => {
	console.log("Removing The Note");
};
module.exports = {
	addNote,
	getAll,
	readNote,
	removeNote
}
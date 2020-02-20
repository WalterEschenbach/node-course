const fs = require("fs");

function getNotes() {
  return "Your notes...";
}

const addNote = (title, body) => {
  const notes = loadNotes();
  console.log(notes);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json").toString();
    return JSON.parse(dataBuffer);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote
};

const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });

    saveNotes(notes);
  } else {
    console.log(chalk.inverse.red("Note title taken!"));
  }
};

const removeNote = title => {
  const notes = loadNotes();
  let titleExist = false;
  const notesToKeep = notes.filter(function(note) {
    if (note.title === title) titleExist = true;
    return note.title !== title;
  });
  titleExist
    ? console.log(chalk.inverse.green(`${title} has been removed!`))
    : console.log(chalk.inverse.red("Title does not exist!"));
  saveNotes(notesToKeep);
};

const listNotes = argv => {
  const notes = loadNotes();
  notes.forEach(note => {
    console.log(chalk.blue.inverse(note.title));
  });
};

const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);
  if (note) {
    console.log(chalk.green.inverse(note.title));
    console.log(chalk.green(note.body));
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
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
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};

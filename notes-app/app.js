const log = console.log;
const chalk = require("chalk");

const notes = require("./notes.js");
const yargs = require("yargs");

//create add command with yargs
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "note title"
    }
  },
  body: {
    describe: "body of note",
    demandOption: true,
    type: "string"
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

//create remove command
yargs.command({
  command: "remove",
  describe: "remove an old note",
  builder: {
    title: {
      describe: "title of note to be removed"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

//create a list command
yargs.command({
  command: "list",
  describe: "list items",
  handler(argv) {
    console.log(chalk.blue.inverse("Your notes:"));
    notes.listNotes(argv);
  }
});

//create a read command
yargs.command({
  command: "read",
  describe: "read an array of items",
  builder: {
    title: {
      describe: "title of note to be read",
      demandOption: true
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});

log(yargs.argv);

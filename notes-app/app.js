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
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

//create remove command
yargs.command({
  command: "remove",
  describe: "remove an old note",
  handler: function() {
    log("Removing an old note!");
  }
});

//create a list command
yargs.command({
  command: "list",
  describe: "list items",
  handler: function() {
    log("List an array of items!");
  }
});

//create a read command
yargs.command({
  command: "read",
  describe: "read an array of items",
  handler: function() {
    log("Read an array of items!");
  }
});

log(yargs.argv);

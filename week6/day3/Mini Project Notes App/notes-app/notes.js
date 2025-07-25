const fs = require('fs');
const chalk = require('chalk');

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    return JSON.parse(dataBuffer.toString());
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (duplicateNote) {
    console.log(chalk.red('Note already exists'));
    return;
  }

  notes.push({ title, body });
  saveNotes(notes);
  console.log(chalk.green('New note added!'));
};

const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter(note => note.title !== title);

  if (notes.length === filteredNotes.length) {
    console.log(chalk.red('Note not found'));
  } else {
    saveNotes(filteredNotes);
    console.log(chalk.green('Note removed!'));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue('Your Notes:'));
  notes.forEach(note => console.log(`- ${note.title}`));
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if (!note) {
    console.log(chalk.red('Note not found'));
  } else {
    console.log(chalk.yellow(note.title));
    console.log(note.body);
  }
};

module.exports = { addNote, removeNote, listNotes, readNote };



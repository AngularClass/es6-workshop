class Note {
  constructor(Notes) {
    this.Notes = Notes;

    this.notes = this.getAllNotes();
  }

  createNote(content) {
    // other things
    this.Notes.createNote(content);
  }

  getOneNote(id) {
    return this.Notes.getOneNote(id);
  }

  getAllNotes() {
    return this.Notes.getAllNotes();
  }
}

Note.$inject = ['Notes'];

export {Note};

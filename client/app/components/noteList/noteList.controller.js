class NoteListController {
  constructor(Notes) {
    this.Notes = Notes;
    this.notes = this.Notes.getState();

    this.Notes.getAllNotes();
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

NoteListController.$inject = ['Notes'];

export {NoteListController};

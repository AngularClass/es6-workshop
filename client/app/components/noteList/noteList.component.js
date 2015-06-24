import './noteList.css';
import {NoteListController as controller} from './noteList.controller';
import template from './noteList.html';

let NoteListComponent = () => {
  return {
    restrict: 'E',
    scope: {},
    controller,
    template
  };
};

export {NoteListComponent};

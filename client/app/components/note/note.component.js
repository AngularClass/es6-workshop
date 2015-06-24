import './note.css';
import template from './note.html';
import {NoteController as controller} from './note.controller';

let NoteComponent = () => {
  return {
    template,
    controller,
    scope: {
      noteData: '='
    },
    bindToController: true,
    restrict: 'E',
    controllerAs: 'vm'
  };
};

export {NoteComponent};

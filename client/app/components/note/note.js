import angular from 'angular';
import {NoteComponent} from './note.component';

let noteModule = angular.module('note', [])
  .directive('note', NoteComponent);

export {noteModule};

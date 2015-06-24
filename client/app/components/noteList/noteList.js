import angular from 'angular';
import {NoteListComponent} from './noteList.component';

let noteListModule = angular.module('noteList', [])
  .directive('noteList', NoteListComponent)

export {noteListModule};

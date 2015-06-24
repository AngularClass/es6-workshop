import angular from 'angular';
import {NoteMakerComponent} from './noteMaker.component';


let noteMakerModule = angular.module('noteMaker', [])
  .directive('noteMaker', NoteMakerComponent);

export {noteMakerModule};


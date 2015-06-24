import angular from 'angular';
import {NoteMakerComponent} from './noteMaker.component';


let NoteMakerModule = angular.module('noteMaker', [])
  .directive('noteMaker', NoteMakerComponent);

export {NoteMakerModule};


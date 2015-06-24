import {Notes} from './noteList.factory';
import angular from 'angular';

let commonModule = angular.module('common', [])
  .factory('Notes', Notes);


export {commonModule};

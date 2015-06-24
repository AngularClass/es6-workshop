import angular from 'angular';
import {HomeComponent} from './home.component';

let homeModule = angular.module('home', [])
  .directive('home', HomeComponent);

export { homeModule };

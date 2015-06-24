import angular from 'angular';
import template from './home.html';

let homeModule = angular.module('home', [])
  .directive('home', function(){
    return {template, controller};
  });

export { homeModule };

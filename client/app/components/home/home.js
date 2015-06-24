import angular from 'angular';

let homeModule = angular.module('home', [])
  .directive('home', function(){
    return {};
  })

export { homeModule};

import 'normalize.css';
import angular from 'angular';
import {homeModule, noteMakerModule} from './components/components';

angular.module('app', [
  homeModule.name,
  noteMakerModule.name
]);

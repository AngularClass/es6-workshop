import 'normalize.css';
import angular from 'angular';
import {commonModule} from './components/common/common';
import {homeModule, noteMakerModule, noteListModule, noteModule} from './components/components';

angular.module('app', [
  homeModule.name,
  noteMakerModule.name,
  noteListModule.name,
  commonModule.name,
  noteModule.name
]);

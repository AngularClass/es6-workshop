import './noteMaker.css';
import {NoteMakerController as Controller} from './noteMaker.controller';
import template from './noteMaker.html';

let NoteMakerComponent = function() {
  return {
    restrict: 'E',
    template,
    controller
  };
}

export {NoteMakerComponent};

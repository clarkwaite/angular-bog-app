import newCreatureController from './new.controller';
import newCreatureTemplate from './new.html';

const newCreatureComponent = {
  controller: newCreatureController,
  template: newCreatureTemplate
}

angular.module('BogApp').component('bogNewCreature', newCreatureComponent);
import editCreatureController from './edit.controller';
import editCreatureTemplate from './edit.html';

const editCreatureComponent = {
  controller: editCreatureController,
  template: editCreatureTemplate
}

angular.module('BogApp').component('bogEditCreature', editCreatureComponent);
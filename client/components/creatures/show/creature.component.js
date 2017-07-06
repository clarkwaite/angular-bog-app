import CreatureController from "./creature.controller";
import creatureTemplate from "./creature.html";

  const creatureComponent = {
  	controller: CreatureController,
  	template: creatureTemplate
  };

  angular.module("BogApp").component("bogCreature", creatureComponent);
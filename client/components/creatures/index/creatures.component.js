import CreaturesController from "./creatures.controller";
import creaturesTemplate from "./creatures.html";

  const creaturesComponent = {
  	controller: CreaturesController,
  	template: creaturesTemplate
  };

  angular.module("BogApp").component("bogCreatures", creaturesComponent);
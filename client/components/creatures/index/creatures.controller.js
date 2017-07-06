CreaturesController.$inject = ["creaturesServices"];

function CreaturesController(creaturesServices) {
  const vm = this;

  activate();

  function activate() {
    creaturesServices.getAllCreatures().then(response => {
      vm.creatures = response;
    });
  }
}

export default CreaturesController;
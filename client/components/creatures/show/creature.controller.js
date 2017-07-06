CreatureController.$inject = ["$stateParams","creaturesServices", "$state"];

function CreatureController($stateParams, creaturesServices, $state) {
  const vm = this;

  activate();

  function activate() {
    creaturesServices.getCreature($stateParams.id).then(response => {
      vm.creature = response;
    });
  }
  vm.goToEdit = function() {
    console.log('the button is working')
    $state.go('editCreature', {creature: vm.creature, id: vm.creature.id})
  }
}

export default CreatureController;
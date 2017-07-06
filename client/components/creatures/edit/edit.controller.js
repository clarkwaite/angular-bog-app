EditCreatureController.$inject = ["$stateParams", "$http", "creaturesServices", "$state"];

function EditCreatureController($stateParams, $http, creaturesServices, $state) {
  console.log($stateParams)
  var vm = this;
  vm.creature = {
    id: $stateParams.id, 
    name: $stateParams.creature.name,
    description: $stateParams.creature.description
  };

  vm.editCreature = function () {
    creaturesServices.editCreature(vm.creature).then(
      function success(response) {
      $state.go("index");
      },
      function failure(response) {
        console.log('Failed to update');

      });
  };
}

  export default EditCreatureController;
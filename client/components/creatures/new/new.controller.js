NewCreatureController.$inject = ["$stateParams", "$http", "creaturesServices", "$state"];

function NewCreatureController($stateParams, $http, creaturesServices, $state) {
	var vm = this;
	vm.creature = {};

	vm.saveCreature = function () {
		creaturesServices.saveCreature(vm.creature).then((response) => {
			console.log(response);
      $state.go("index");
		});
	};
}

export default NewCreatureController;
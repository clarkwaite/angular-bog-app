const angular = require("angular");

creaturesServices.$inject = ["$http"];

function creaturesServices($http) {
	const service = this;

	service.getAllCreatures = function () {
		return $http.get("/creatures").then(response => response.data);
	};

	service.getCreature = function (id) {
		return $http.get("/creatures/" + id).then(response => {
			return response.data;
		});
	};

	service.saveCreature = function (newCreature) {
		return $http.post("/creatures", newCreature).then(response => {
			return response.data;
		});
	};

	service.editCreature = function (editCreature) {
		console.log(editCreature)
		return $http.patch('/creatures/' + editCreature.id, editCreature)
	};

	return service;
}

angular.module("BogApp").service("creaturesServices", creaturesServices);
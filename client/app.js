

const angular = require('angular');
require("angular-ui-router");

angular.module('BogApp', ["ui.router"]).config(router);

router.$inject = ["$stateProvider", "$urlRouterProvider"];

function router ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state("index", {
			url: "/",
			template: "<bog-creatures></bog-creatures>"
		})
		.state("creature", {
			url: "/creature/:id",
			template: "<bog-creature></bog-creature>"
		})
		.state("newCreature", {
			url: "/creature/new",
			template: "<bog-new-creature></bog-new-creature>"
		})
		.state("editCreature", {
			url: "/creature/:id/edit",
			template: "<bog-edit-creature></bog-edit-creature>",
			params:{creature: null, id: null}
		});

	$urlRouterProvider.otherwise("/");
}
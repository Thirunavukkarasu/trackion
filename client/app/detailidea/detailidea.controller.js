angular
	.module('detailidea')
	.controller('DetailIdeaController', DetailIdeaController);
	
function DetailIdeaController($scope, $routeParams,DetailIdeaService) {
      DetailIdeaService.get({ _id: $routeParams.id }, function(idea) {
			$scope.ideaDetail = idea;	
	  });
}
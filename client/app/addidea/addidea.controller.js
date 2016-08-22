angular
	.module('addidea')
	.controller('AddIdeaController', AddIdeaController);
	
function AddIdeaController($scope,Upload) {
	$scope.saveIdea = function(idea){
	    idea.ideaPoster.upload = Upload.upload({
	      url   : '/api/addIdea',
	      data  : idea
	    });
	}
}
angular
	.module('home')
	.controller('HomeController', HomeController);

function HomeController($scope,$http,HomeService) {
	 HomeService.getAllIdeas().then(function(response){
 		$scope.listOfIdeas = response.data;
 	 });
}

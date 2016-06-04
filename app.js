var trackion = angular.module('Trackion',[]);

trackion.controller('HomeCtrl', ['$scope','$http', function ($scope,$http) {
	$http.get('data/ideas.json').then(function(response){
		$scope.listOfIdeas = response.data;
	})
}]);
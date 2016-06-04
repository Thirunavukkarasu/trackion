angular
	.module('home')
	.service('HomeService', HomeService);

function HomeService($http) {
	this.getAllIdeas = function(){
		return $http.get('assets/data/ideas.json');	
	}
}
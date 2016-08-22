angular.module('TrackionApp',[
	'ngRoute',
	'ngResource',
	'ngMessages', 
	'ngFileUpload',
	'ui.bootstrap',
	'core',
	'home',
	'dashboard',
	'addidea',
	'detailidea',
	'signup',
	'login'
])
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$locationProvider.html5Mode(true);
	$routeProvider.otherwise({redirectTo:'/'});
}])
.controller('HeaderController', ['$scope','$location','AuthService', function($scope,$location,AuthService){
	$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };	
   	$scope.logout = function() {
      AuthService.logout();
      $location.path('/');
	};    
}]);
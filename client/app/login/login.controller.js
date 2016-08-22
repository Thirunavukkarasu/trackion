angular
	.module('login')
	.controller('LoginController', LoginController);
	
function LoginController($scope,AuthService) {
	$scope.login = function() {
	     AuthService.login({
	        email       : $scope.email,
	        password    : $scope.password
	    });
	}; 	
}
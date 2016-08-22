angular
	.module('signup')
	.controller('SignUpController',['$scope','AuthService',SignUpController]);
	
function SignUpController($scope,AuthService) {
	$scope.signup = function() {
	     AuthService.signup({
	     	displayName : $scope.displayName,
	        email       : $scope.email,
	        password    : $scope.password
	    });
	}; 	
}
angular.module('signup',[])

.config(['$routeProvider',function($routeProvider){
	$routeProvider.when("/signup",{
		templateUrl : 'app/signup/signup.tpl.html',
		controller  : 'SignUpController'
	});
}]);
angular.module('login',[])

.config(['$routeProvider',function($routeProvider){
	$routeProvider.when("/login",{
		templateUrl : 'app/login/login.tpl.html',
		controller  : 'LoginController'
	});
}]);
angular.module('dashboard',[])

.config(['$routeProvider',function($routeProvider){
	$routeProvider.when("/dashboard",{
		templateUrl : 'app/dashboard/dashboard.tpl.html',
		controller  : 'DashboardController'
	});
}]);
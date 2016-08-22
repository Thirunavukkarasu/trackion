angular.module('addidea',[])

.config(['$routeProvider',function($routeProvider){
	$routeProvider.when("/addidea",{
		templateUrl : 'app/addidea/addidea.tpl.html',
		controller  : 'AddIdeaController'
	});
}]);
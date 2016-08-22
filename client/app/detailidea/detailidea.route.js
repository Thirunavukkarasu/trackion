angular.module('detailidea',[])

.config(['$routeProvider',function($routeProvider){
	$routeProvider.when("/detailidea/:id",{
		templateUrl : 'app/detailidea/detailidea.tpl.html',
		controller  : 'DetailIdeaController'
	});
}]);
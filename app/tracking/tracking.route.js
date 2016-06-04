angular.module('tracking', [])

.config(['$routeProvider', function ($routeProvider) {
     $routeProvider.when("/tracking", {
		templateUrl: "app/tracking/tracking.tpl.html", 
		controller: "TrackingController"
	 }); 
}]);
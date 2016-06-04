angular.module('Trackion',[
    'ngRoute',
    'ui.bootstrap',
    'home',
    'tracking'
])

.config(['$routeProvider', function ($routeProvider) {
     $routeProvider.otherwise({redirectTo:'/'}); 
}]);



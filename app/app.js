angular.module('Trackion',[
    'ngRoute',
    'ui.bootstrap',
    'home',
    'tracking'
])

.config(['$routeProvider', function ($routeProvider) {
     $routeProvider.otherwise({redirectTo:'/'}); 
}])

.directive('a', function() {
    return {
        restrict: 'E',
        link: function(scope, elem, attrs) {
            if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
                elem.on('click', function(e){
                    e.preventDefault();
                });
            }
        }
   };
})

.controller('HeaderController', function ($scope,$location) {
	  $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});



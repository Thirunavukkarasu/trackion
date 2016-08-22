angular
	.module('core')
	.factory('AuthService', ['$http', '$location', '$rootScope', '$window',AuthService]);

function AuthService($http, $location, $rootScope, $window) {
    var token = $window.localStorage.token;
    
    if (token) {
      var payload = JSON.parse($window.atob(token.split('.')[1]));
      $rootScope.currentUser = payload.user;
    }

 	return {
      login  : login,
      signup : signup,
      logout : logout
    };

    function login(user) {
        var payload;

        return $http.post('/api/auth/login', user).success(function(data) {
            $window.localStorage.token = data.token;
            payload = JSON.parse($window.atob(data.token.split('.')[1]));
            $rootScope.currentUser = payload.user;
            $location.path('/dashboard');
        }).error(function() {
            delete $window.localStorage.token;
        });
    }

    function signup(user) {
        return $http.post('/api/auth/signup', user).success(function() {
            $location.path('/login');
        }).error(function(response) {

        });
    }

    function logout() {
        delete $window.localStorage.token;
        $rootScope.currentUser = null;
    }
}
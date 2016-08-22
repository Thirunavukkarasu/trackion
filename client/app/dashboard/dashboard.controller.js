	angular
	.module('dashboard')
	.controller('DashboardController', DashboardController);
	
function DashboardController($scope,DashboardService) {
  	$scope.alphabet = ['0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    	  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      	  'Y', 'Z'];

    $scope.genres = ['AngularJS', 'EmberJS', 'ExtJS', 'NodeJS', 'PLSQL',
      'Oracle', 'Java', 'Weblogic', 'Ruby', 'Python', 'Php',
      'UnderscoreJS', 'JQuery', 'MongoDB', 'ElasticSearch', 'Solr', 'Hudson',
      'ReactJS', 'Jenkins', 'Ionic', 'Bootstrap', 'Foundation', 'Android','IOS'];

 	  $scope.headingTitle = 'Top 12 Ideas';

    $scope.ideas = DashboardService.query();

    /*$scope.filterByGenre = function(genre) {
      $scope.ideas = DashboardService.query({ genre: genre });
      $scope.headingTitle = genre;
    };

    $scope.filterByAlphabet = function(char) {
      $scope.ideas = DashboardService.query({ alphabet: char });
      $scope.headingTitle = char;
	  }; */
}
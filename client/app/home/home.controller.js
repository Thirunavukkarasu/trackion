(function() {
    'use strict';
	angular
		.module('home')
		.controller('HomeController', HomeController);
		
	function HomeController($scope) {
		 var vm = $scope;

		 vm.myInterval = 5000;
		 vm.noWrapSlides = false;
		 vm.slides = [{
		      image       : 'images/idea1.jpg',
		      description : 'You\'re sitting in a café for a few minutes scrolling through the news on your tablet when a few ideas suddenly pop into your head about a project at work. In an earlier era, you\'d probably jot the ideas down on a napkin and stuff it in your pocket. Or maybe you\'d send a quick email to yourself. Neither option is particularly convenient.',
		      heading     : 'Have great ideas then log it here :)',
		      id          : 0
		 },{
		      image       : 'images/idea2.jpg',
		      description : 'You\'re sitting in a café for a few minutes scrolling through the news on your tablet when a few ideas suddenly pop into your head about a project at work. In an earlier era, you\'d probably jot the ideas down on a napkin and stuff it in your pocket. Or maybe you\'d send a quick email to yourself. Neither option is particularly convenient.',
		      heading     : 'Have great ideas then log it here :D',
		      id          : 1
		 },{
		      image       : 'images/idea3.jpg',
		      description : 'You\'re sitting in a café for a few minutes scrolling through the news on your tablet when a few ideas suddenly pop into your head about a project at work. In an earlier era, you\'d probably jot the ideas down on a napkin and stuff it in your pocket. Or maybe you\'d send a quick email to yourself. Neither option is particularly convenient.',
		      heading     : 'Have great ideas then log it here !',
		      id          : 2
		}];	
	}

})();
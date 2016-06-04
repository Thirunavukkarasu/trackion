angular
	.module('tracking')
	.controller('TrackingController', TrackingController);

function TrackingController($scope,$http,TrackingService) {
	console.log("Tracking Controller!");
}

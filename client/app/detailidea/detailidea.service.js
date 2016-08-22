angular
	.module('detailidea')
	.service('DetailIdeaService', DetailIdeaService);

function DetailIdeaService($resource) {
	return $resource('/api/getIdea/:_id');
}
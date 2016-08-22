angular
	.module('dashboard')
	.service('DashboardService', DashboardService);

function DashboardService($resource) {
	return $resource('/api/getAllIdeas',{},{
        query: {method: "GET",cache: true,isArray:true}
    });
}
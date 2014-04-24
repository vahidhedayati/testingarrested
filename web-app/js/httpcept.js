angular.module('httpcept',['ngResource']).
factory('myHttpResponseInterceptor',['$q','$location',function($q,$location){
	return {
		response: function(response){
			return promise.then(
				function success(response) {
					return response;
				},
			function error(response) {
				if(response.status === 401){
					//$location.path('/signin');
				return $q.reject(response);
				}
				else{
					return $q.reject(response);
				}
			});
		}
	}
}]);

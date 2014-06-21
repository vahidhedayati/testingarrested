var app = angular.module('arrestedServices', []);

app.factory('LangService', function($q, $http) {
	var service = {
	 getLang: function() {
		var d = $q.defer();
		$http.get('auth/userLocation')
		.success(function(data, status) {
			d.resolve(data);
		}).error(function(data, status) {
			d.reject(data);
		});
		return d.promise;
      },
      getLang2: function() {
    	  var d = $q.defer();
    	  $http.post('auth/userLocation', {})
    	  .success(function(data, status) {
    		  d.resolve(data);
    	  }).error(function(data, status) {
    		  d.reject(data);
    	  });
    	  return d.promise;
      }
   }
   return service;
 }); 
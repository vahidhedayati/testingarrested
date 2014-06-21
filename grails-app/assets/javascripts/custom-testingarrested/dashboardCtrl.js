'use strict';
function DashboardCtrl($scope,$rootScope,LangService,$cacheFactory,$templateCache){
    $scope.dashboard=function() { 
    	$templateCache.removeAll();
    	$cacheFactory.get('$http').removeAll();
    	LangService.getLang()
    	.then(function(data) {
		  $rootScope.myLang = data;
    	});
    	$scope.userLocale2 = function() {
    		LangService.getLang2()
    		.then(function(data) {
    			$scope.userLocale = data;
    		});
    	//window.location.href="#/"
    	};	
    }
}

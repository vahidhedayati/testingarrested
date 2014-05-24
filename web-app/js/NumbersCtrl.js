'use strict';
function NumbersCtrl(DAO, $rootScope, $filter, ngTableParams)
{
	if ($rootScope.appConfig) {
		if (!$rootScope.appConfig.token!='') {
			window.location.href = "#/login"
		}
	}

	$rootScope.flags = {save: false};
	$rootScope.errors = {loadingSite: false, showErrors: false, showServerError: false,errorMessages:[]};
	$rootScope.errorValidation = function(){
	   $rootScope.errors = {loadingSite: true};
	};
	
	if(!$rootScope.numbers){
		$rootScope.filter = ""
		$rootScope.numberss = [];
		$rootScope.numbers = {};
	}

	
	$rootScope.getAllNumbers = function () {
		//get all
		$rootScope.errors.errorMessages=[];
		$rootScope.tableParams = new ngTableParams({
	            page: 1,            // show first page
	            count: 10,           // count per page
	            sorting: {
	                id : 'desc' // initial sorting
	            }
	     }, {
	     getData: function($defer, params) {
		 DAO.query({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller: 'numbers', action: 'list'},	
		 	$rootScope.loadingSite=true,
		 	function (result) {
			 	var putIt  = params.sorting() ? $filter('orderBy')(result, params.orderBy()): id;
			 	params.total(putIt.length);
                $defer.resolve(putIt.slice((params.page() - 1) * params.count(), params.page() * params.count()));
		        $rootScope.numberss = putIt;
                $rootScope.loadingSite=false;   
		    },
		    function (error) {
		        $rootScope.errors.showErrors = true;
		        $rootScope.errors.showServerError = true;
		        $rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
		        $rootScope.loadingSite=false;
		     });
		        }
		    });
	
	};
	 
	 
	$rootScope.getAll1Numbers = function () {
		//get all
		$rootScope.errors.errorMessages=[];
		DAO.query({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller: 'numbers', action: 'list'},
		$rootScope.loadingSite=true,
		function (result) {
			$rootScope.numberss = result;
			$rootScope.tableParams = new ngTableParams({
		         page: 1,            // show first page
		         count: 10           // count per page
		     }, {
		    	 total: result.length, // length of data
		         getData: function($defer, params) {
		             $defer.resolve(result.slice((params.page() - 1) * params.count(), params.page() * params.count()));
		         }
		     });
			$rootScope.loadingSite=false;   
			
		},
		function (error) {
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
			$rootScope.loadingSite=false;
		});
	};

	$rootScope.newNumbers = function () {
		$rootScope.loadingSite=true;
		$rootScope.numbers = {};
		$rootScope.loadingSite=false;
		window.location.href = "#/numbers/create"		
	}

	$rootScope.manualSaveNumbers = function () {
		$rootScope.loadingSite=true;
		$rootScope.flags.save = false;
		if ($rootScope.numbers.id == undefined)
		{
			$rootScope.saveNumbers();
		}
		else
		{
			$rootScope.updateNumbers();
		}
	}

	$rootScope.saveNumbers = function () {
		$rootScope.errors.errorMessages=[];
		DAO.save({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.numbers, controller:'numbers', action:'save'},
		function (result) {
			$rootScope.numbers = result;
			$rootScope.flags.save = true;
			$rootScope.loadingSite=false;

		},
		function (error) {
			$rootScope.flags.save = false;
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
			$rootScope.loadingSite=false;   
		});
	}

	$rootScope.updateNumbers = function () {
		$rootScope.errors.errorMessages=[];
		DAO.update({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.numbers, controller:'numbers', action:'update'},
		$rootScope.loadingSite=true,
		function (result) {
			$rootScope.numberss = result;
			$rootScope.flags.save = true;
			$rootScope.loadingSite=false;
			window.location.href = "#/numbers/list"
		},
		function (error) {
			$rootScope.flags.save = false;
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
			$rootScope.loadingSite=false;
		});
	}

	$rootScope.editNumbers = function (numbers){
		$rootScope.errors.errorMessages=[];
		DAO.get({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.numbers, id: numbers.id, controller:'numbers', action:'show'},
		$rootScope.loadingSite=true,
		function (result) {
			$rootScope.numbers = result;
			$rootScope.flags.save = true;
			$rootScope.loadingSite=false;
			window.location.href = "#/numbers/edit"
		},
		function (error) {
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push('Error: '+error.status+' '+error.data);
			$rootScope.loadingSite=false;
		});
	}

	$rootScope.confirmDeleteNumbers = function () {
		$rootScope.errors.errorMessages=[];
		DAO.delete({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.numbers, id: $rootScope.numbers.id, controller:'numbers', action:'delete'},
		$rootScope.loadingSite=true,
		function (result) {
			//$rootScope.numberss = result;
			$rootScope.flags.save = true;
			$rootScope.loadingSite=false;
			window.location.href = "#/numbers/list"
		},
		function (error) {
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
			$rootScope.loadingSite=false;
		});
	}
}
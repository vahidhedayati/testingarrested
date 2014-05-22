'use strict';
function NumbersCtrl(DAO, $rootScope)
{
	if ($rootScope.appConfig) {
		if (!$rootScope.appConfig.token!='') {
			window.location.href = "#/login"
		}
	}

	$rootScope.flags = {save: false};
	
	$rootScope.errors = {loading: false, showErrors: false, showServerError: false,errorMessages:[]};
	
	$rootScope.errorValidation = function(){
	   $rootScope.errors = {loading: true};
	};
	
	if(!$rootScope.numbers){
		$rootScope.filter = ""
		$rootScope.numberss = [];
		$rootScope.numbers = {};
	}

	$rootScope.getAllNumbers = function () {
		//get all
		$rootScope.errors.errorMessages=[];
		DAO.query({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller: 'numbers', action: 'list'},
		$rootScope.loading=true,
		function (result) {
			$rootScope.numberss = result;
			$rootScope.loading=false;   
		},
		function (error) {
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
			$rootScope.loading=false;
		});
	};

	$rootScope.newNumbers = function () {
		$rootScope.loading=true;
		$rootScope.numbers = {};
		$rootScope.loading=false;
		window.location.href = "#/numbers/create"		
	}

	$rootScope.manualSaveNumbers = function () {
		$rootScope.loading=true;
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
			$rootScope.loading=false;

		},
		function (error) {
			$rootScope.flags.save = false;
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
			$rootScope.loading=false;   
		});
	}

	$rootScope.updateNumbers = function () {
		$rootScope.errors.errorMessages=[];
		DAO.update({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.numbers, controller:'numbers', action:'update'},
		$rootScope.loading=true,
		function (result) {
			$rootScope.numberss = result;
			$rootScope.flags.save = true;
			$rootScope.loading=false;
			window.location.href = "#/numbers/list"
		},
		function (error) {
			$rootScope.flags.save = false;
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
			$rootScope.loading=false;
		});
	}

	$rootScope.editNumbers = function (numbers){
		$rootScope.errors.errorMessages=[];
		DAO.get({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.numbers, id: numbers.id, controller:'numbers', action:'show'},
		$rootScope.loading=true,
		function (result) {
			$rootScope.numbers = result;
			$rootScope.flags.save = true;
			$rootScope.loading=false;
			window.location.href = "#/numbers/edit"
		},
		function (error) {
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push('Error: '+error.status+' '+error.data);
			$rootScope.loading=false;
		});
	}

	$rootScope.confirmDeleteNumbers = function () {
		$rootScope.errors.errorMessages=[];
		DAO.delete({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.numbers, id: $rootScope.numbers.id, controller:'numbers', action:'delete'},
		$rootScope.loading=true,
		function (result) {
			//$rootScope.numberss = result;
			$rootScope.flags.save = true;
			$rootScope.loading=false;
			window.location.href = "#/numbers/list"
		},
		function (error) {
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
			$rootScope.loading=false;
		});
	}
}
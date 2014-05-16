'use strict';
function AuthorsCtrl(DAO, $rootScope)
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
	
	if(!$rootScope.authors){
		$rootScope.filter = ""
		$rootScope.authorss = [];
		$rootScope.authors = {};
	}

	$rootScope.getAllAuthors = function () {
		//get all
		DAO.query({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller: 'authors', action: 'list'},
		$rootScope.loading=true,
		function (result) {
			$rootScope.authorss = result;
			$rootScope.loading=false;   
		},
		function (error) {
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
			$rootScope.loading=false;
		});
	};

	$rootScope.newAuthors = function () {
		$rootScope.loading=true;
		$rootScope.authors = {};
		$rootScope.loading=false;
		window.location.href = "#/authors/create"		
	}

	$rootScope.manualSaveAuthors = function () {
		$rootScope.loading=true;
		$rootScope.flags.save = false;
		if ($rootScope.authors.id == undefined)
		{
			$rootScope.saveAuthors();
		}
		else
		{
			$rootScope.updateAuthors();
		}
	}

	$rootScope.saveAuthors = function () {
		DAO.save({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.authors, controller:'authors', action:'save'},
		function (result) {
			$rootScope.authors = result;
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

	$rootScope.updateAuthors = function () {
		DAO.update({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.authors, controller:'authors', action:'update'},
		$rootScope.loading=true,
		function (result) {
			$rootScope.authorss = result;
			$rootScope.flags.save = true;
			$rootScope.loading=false;
			window.location.href = "#/authors/list"
		},
		function (error) {
			$rootScope.flags.save = false;
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
			$rootScope.loading=false;
		});
	}

	$rootScope.editAuthors = function (authors){
		DAO.get({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.authors, id: authors.id, controller:'authors', action:'show'},
		$rootScope.loading=true,
		function (result) {
			$rootScope.authors = result;
			$rootScope.flags.save = true;
			$rootScope.loading=false;
			window.location.href = "#/authors/edit"
		},
		function (error) {
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push('Error: '+error.status+' '+error.data);
			$rootScope.loading=false;
		});
	}

	$rootScope.confirmDeleteAuthors = function () {
		DAO.delete({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.authors, id: $rootScope.authors.id, controller:'authors', action:'delete'},
		$rootScope.loading=true,
		function (result) {
			//$rootScope.authorss = result;
			$rootScope.flags.save = true;
			$rootScope.loading=false;
			window.location.href = "#/authors/list"
		},
		function (error) {
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
			$rootScope.loading=false;
		});
	}
}
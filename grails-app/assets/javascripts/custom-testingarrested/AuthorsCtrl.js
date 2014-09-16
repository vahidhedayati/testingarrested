'use strict';
function AuthorsCtrl(DAO, $rootScope, $scope, $filter, ngTableParams)
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
	
	if(!$rootScope.authors){
		$rootScope.filter = ""
		$rootScope.authorss = [];
		$rootScope.authors = {};
	}
	
	$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,           // count per page
        sorting: {
            id : 'desc' // initial sorting
        }
	}, {
		getData: function($defer, params) {
			DAO.query({appName: $scope.appConfig.appName, token: $scope.appConfig.token, controller: 'authors', action: 'list'},	
				$scope.loadingSite=true,
					function (result) {
						$scope.authorss=result;
						var putIt  = params.sorting() ? $filter('orderBy')($scope.authorss, params.orderBy()): id;
						putIt = params.filter ? $filter('filter')( putIt, params.filter()) :  putIt;
						params.total(putIt.length);
						$defer.resolve(putIt.slice((params.page() - 1) * params.count(), params.page() * params.count()));
						$scope.authorss=(putIt.slice((params.page() - 1) * params.count(), params.page() * params.count()));
						$scope.loadingSite=false;   
					},
					function (error) {
						$scope.errors.showErrors = true;
						$scope.errors.showServerError = true;
						$scope.errors.errorMessages.push(''+error.status+' '+error.data);
						$scope.loadingSite=false;
					});
      	}
    });
	
	//Required for dependency lookup 
	$rootScope.getAllAuthors = function () {
		//get all
		$rootScope.errors.errorMessages=[];
		DAO.query({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller: 'authors', action: 'list'},
		$rootScope.loadingSite=true,
		function (result) {
			$rootScope.authorss = result;
			$rootScope.loadingSite=false;   
			
		},
		function (error) {
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
			$rootScope.loadingSite=false;
		});
	};
	 
	
	$rootScope.newAuthors = function () {
		$rootScope.loadingSite=true;
		$rootScope.authors = {};
		$rootScope.loadingSite=false;
		window.location.href = "#/authors/create"		
	}

	$rootScope.manualSaveAuthors = function () {
		$rootScope.loadingSite=true;
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
		$rootScope.errors.errorMessages=[];
		DAO.save({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.authors, controller:'authors', action:'save'},
		function (result) {
			$rootScope.authors = result;
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

	$rootScope.updateAuthors = function () {
		$rootScope.errors.errorMessages=[];
		DAO.update({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.authors, controller:'authors', action:'update'},
		$rootScope.loadingSite=true,
		function (result) {
			$rootScope.authorss = result;
			$rootScope.flags.save = true;
			$rootScope.loadingSite=false;
			window.location.href = "#/authors/list"
		},
		function (error) {
			$rootScope.flags.save = false;
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
			$rootScope.loadingSite=false;
		});
	}

	$rootScope.editAuthors = function (authors){
		$rootScope.errors.errorMessages=[];
		DAO.get({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.authors, id: authors.id, controller:'authors', action:'show'},
		$rootScope.loadingSite=true,
		function (result) {
			$rootScope.authors = result;
			$rootScope.flags.save = true;
			$rootScope.loadingSite=false;
			window.location.href = "#/authors/edit"
		},
		function (error) {
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push('Error: '+error.status+' '+error.data);
			$rootScope.loadingSite=false;
		});
	}

	$rootScope.confirmDeleteAuthors = function () {
		$rootScope.errors.errorMessages=[];
		DAO.delete({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.authors, id: $rootScope.authors.id, controller:'authors', action:'delete'},
		$rootScope.loadingSite=true,
		function (result) {
			//$rootScope.authorss = result;
			$rootScope.flags.save = true;
			$rootScope.loadingSite=false;
			window.location.href = "#/authors/list"
		},
		function (error) {
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
			$rootScope.loadingSite=false;
		});
	}
}

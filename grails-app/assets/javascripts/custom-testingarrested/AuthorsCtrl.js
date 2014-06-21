'use strict';
function AuthorsCtrl(DAO, $scope, $filter, ngTableParams)
{
	if ($scope.appConfig) {
		if (!$scope.appConfig.token!='') {
			window.location.href = "#/login"
		}
	}

	$scope.flags = {save: false};
	$scope.errors = {loadingSite: false, showErrors: false, showServerError: false,errorMessages:[]};
	$scope.errorValidation = function(){
	   $scope.errors = {loadingSite: true};
	};
	
	if(!$scope.authors){
		$scope.filter = ""
		$scope.authorss = [];
		$scope.authors = {};
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
	$scope.getAllAuthors = function () {
		//get all
		$scope.errors.errorMessages=[];
		DAO.query({appName: $scope.appConfig.appName, token: $scope.appConfig.token, controller: 'authors', action: 'list'},
		$scope.loadingSite=true,
		function (result) {
			$scope.authorss = result;
			$scope.loadingSite=false;   
			
		},
		function (error) {
			$scope.errors.showErrors = true;
			$scope.errors.showServerError = true;
			$scope.errors.errorMessages.push(''+error.status+' '+error.data);
			$scope.loadingSite=false;
		});
	};
	 
	
	$scope.newAuthors = function () {
		$scope.loadingSite=true;
		$scope.authors = {};
		$scope.loadingSite=false;
		window.location.href = "#/authors/create"		
	}

	$scope.manualSaveAuthors = function () {
		$scope.loadingSite=true;
		$scope.flags.save = false;
		if ($scope.authors.id == undefined)
		{
			$scope.saveAuthors();
		}
		else
		{
			$scope.updateAuthors();
		}
	}

	$scope.saveAuthors = function () {
		$scope.errors.errorMessages=[];
		DAO.save({appName: $scope.appConfig.appName, token: $scope.appConfig.token, instance:$scope.authors, controller:'authors', action:'save'},
		function (result) {
			$scope.authors = result;
			$scope.flags.save = true;
			$scope.loadingSite=false;

		},
		function (error) {
			$scope.flags.save = false;
			$scope.errors.showErrors = true;
			$scope.errors.showServerError = true;
			$scope.errors.errorMessages.push(''+error.status+' '+error.data);
			$scope.loadingSite=false;   
		});
	}

	$scope.updateAuthors = function () {
		$scope.errors.errorMessages=[];
		DAO.update({appName: $scope.appConfig.appName, token: $scope.appConfig.token, instance:$scope.authors, controller:'authors', action:'update'},
		$scope.loadingSite=true,
		function (result) {
			$scope.authorss = result;
			$scope.flags.save = true;
			$scope.loadingSite=false;
			window.location.href = "#/authors/list"
		},
		function (error) {
			$scope.flags.save = false;
			$scope.errors.showErrors = true;
			$scope.errors.showServerError = true;
			$scope.errors.errorMessages.push(''+error.status+' '+error.data);
			$scope.loadingSite=false;
		});
	}

	$scope.editAuthors = function (authors){
		$scope.errors.errorMessages=[];
		DAO.get({appName: $scope.appConfig.appName, token: $scope.appConfig.token, instance:$scope.authors, id: authors.id, controller:'authors', action:'show'},
		$scope.loadingSite=true,
		function (result) {
			$scope.authors = result;
			$scope.flags.save = true;
			$scope.loadingSite=false;
			window.location.href = "#/authors/edit"
		},
		function (error) {
			$scope.errors.showErrors = true;
			$scope.errors.showServerError = true;
			$scope.errors.errorMessages.push('Error: '+error.status+' '+error.data);
			$scope.loadingSite=false;
		});
	}

	$scope.confirmDeleteAuthors = function () {
		$scope.errors.errorMessages=[];
		DAO.delete({appName: $scope.appConfig.appName, token: $scope.appConfig.token, instance:$scope.authors, id: $scope.authors.id, controller:'authors', action:'delete'},
		$scope.loadingSite=true,
		function (result) {
			//$scope.authorss = result;
			$scope.flags.save = true;
			$scope.loadingSite=false;
			window.location.href = "#/authors/list"
		},
		function (error) {
			$scope.errors.showErrors = true;
			$scope.errors.showServerError = true;
			$scope.errors.errorMessages.push(''+error.status+' '+error.data);
			$scope.loadingSite=false;
		});
	}
}

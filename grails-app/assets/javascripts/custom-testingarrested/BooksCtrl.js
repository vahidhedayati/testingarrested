'use strict';
function BooksCtrl(DAO, $scope, $filter, ngTableParams)
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
	
	if(!$scope.books){
		$scope.filter = ""
		$scope.bookss = [];
		$scope.books = {};
	}

	$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,           // count per page
        sorting: {
            id : 'desc' // initial sorting
        }
	}, {
		getData: function($defer, params) {
			DAO.query({appName: $scope.appConfig.appName, token: $scope.appConfig.token, controller: 'books', action: 'list'},	
				$scope.loadingSite=true,
					function (result) {
						$scope.bookss=result;
						var putIt  = params.sorting() ? $filter('orderBy')($scope.bookss, params.orderBy()): id;
						putIt = params.filter ? $filter('filter')( putIt, params.filter()) :  putIt;
						params.total(putIt.length);
						$defer.resolve(putIt.slice((params.page() - 1) * params.count(), params.page() * params.count()));
						$scope.bookss=(putIt.slice((params.page() - 1) * params.count(), params.page() * params.count()));
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
	$scope.getAllBooks = function () {
		//get all
		$scope.errors.errorMessages=[];
		DAO.query({appName: $scope.appConfig.appName, token: $scope.appConfig.token, controller: 'books', action: 'list'},
		$scope.loadingSite=true,
		function (result) {
			$scope.bookss = result;
			$scope.loadingSite=false;   
			
		},
		function (error) {
			$scope.errors.showErrors = true;
			$scope.errors.showServerError = true;
			$scope.errors.errorMessages.push(''+error.status+' '+error.data);
			$scope.loadingSite=false;
		});
	};
	 
	
	$scope.newBooks = function () {
		$scope.loadingSite=true;
		$scope.books = {};
		$scope.loadingSite=false;
		window.location.href = "#/books/create"
	}

	$scope.manualSaveBooks = function () {
		$scope.loadingSite=true;
		$scope.flags.save = false;
		if ($scope.books.id == undefined)
		{
			$scope.saveBooks();
		}
		else
		{
			$scope.updateBooks();
		}
	}

	$scope.saveBooks = function () {
		$scope.errors.errorMessages=[];
		DAO.save({appName: $scope.appConfig.appName, token: $scope.appConfig.token, instance:$scope.books, controller:'books', action:'save'},
		function (result) {
			$scope.books = result;
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

	$scope.updateBooks = function () {
		$scope.errors.errorMessages=[];
		DAO.update({appName: $scope.appConfig.appName, token: $scope.appConfig.token, instance:$scope.books, controller:'books', action:'update'},
		$scope.loadingSite=true,
		function (result) {
			$scope.bookss = result;
			$scope.flags.save = true;
			$scope.loadingSite=false;
			window.location.href = "#/books/list"
		},
		function (error) {
			$scope.flags.save = false;
			$scope.errors.showErrors = true;
			$scope.errors.showServerError = true;
			$scope.errors.errorMessages.push(''+error.status+' '+error.data);
			$scope.loadingSite=false;
		});
	}

	$scope.editBooks = function (books){
		$scope.errors.errorMessages=[];
		DAO.get({appName: $scope.appConfig.appName, token: $scope.appConfig.token, instance:$scope.books, id: books.id, controller:'books', action:'show'},
		$scope.loadingSite=true,
		function (result) {
			$scope.books = result;
			$scope.flags.save = true;
			$scope.loadingSite=false;
			 window.location.href = "#/books/edit"
		},
		function (error) {
			$scope.errors.showErrors = true;
			$scope.errors.showServerError = true;
			$scope.errors.errorMessages.push('Error: '+error.status+' '+error.data);
			$scope.loadingSite=false;
		});
	}

	$scope.confirmDeleteBooks = function () {
		$scope.errors.errorMessages=[];
		DAO.delete({appName: $scope.appConfig.appName, token: $scope.appConfig.token, instance:$scope.books, id: $scope.books.id, controller:'books', action:'delete'},
		$scope.loadingSite=true,
		function (result) {
			//$scope.bookss = result;
			$scope.flags.save = true;
			$scope.loadingSite=false;
			window.location.href = "#/books/list"
		},
		function (error) {
			$scope.errors.showErrors = true;
			$scope.errors.showServerError = true;
			$scope.errors.errorMessages.push(''+error.status+' '+error.data);
			$scope.loadingSite=false;
		});
	}
}

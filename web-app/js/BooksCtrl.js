'use strict';
function BooksCtrl(DAO, $rootScope)
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
	
	if(!$rootScope.books){
		$rootScope.filter = ""
		$rootScope.bookss = [];
		$rootScope.books = {};
	}

	$rootScope.getAllBooks = function () {
		//get all
		DAO.query({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller: 'books', action: 'list'},
		$rootScope.loading=true,
		function (result) {
			$rootScope.bookss = result;
			$rootScope.loading=false;   
		},
		function (error) {
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
			$rootScope.loading=false;
		});
	};

	$rootScope.newBooks = function () {
		$rootScope.loading=true;
		$rootScope.books = {};
		$rootScope.loading=false;
		window.location.href = "#/books/create"		
	}

	$rootScope.manualSaveBooks = function () {
		$rootScope.loading=true;
		$rootScope.flags.save = false;
		if ($rootScope.books.id == undefined)
		{
			$rootScope.saveBooks();
		}
		else
		{
			$rootScope.updateBooks();
		}
	}

	$rootScope.saveBooks = function () {
		DAO.save({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.books, controller:'books', action:'save'},
		function (result) {
			$rootScope.books = result;
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

	$rootScope.updateBooks = function () {
		DAO.update({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.books, controller:'books', action:'update'},
		$rootScope.loading=true,
		function (result) {
			$rootScope.bookss = result;
			$rootScope.flags.save = true;
			$rootScope.loading=false;
			window.location.href = "#/books/list"
		},
		function (error) {
			$rootScope.flags.save = false;
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
			$rootScope.loading=false;
		});
	}

	$rootScope.editBooks = function (books){
		DAO.get({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.books, id: books.id, controller:'books', action:'show'},
		$rootScope.loading=true,
		function (result) {
			$rootScope.books = result;
			$rootScope.flags.save = true;
			$rootScope.loading=false;
			window.location.href = "#/books/edit"
		},
		function (error) {
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push('Error: '+error.status+' '+error.data);
			$rootScope.loading=false;
		});
	}

	$rootScope.confirmDeleteBooks = function () {
		DAO.delete({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.books, id: $rootScope.books.id, controller:'books', action:'delete'},
		$rootScope.loading=true,
		function (result) {
			//$rootScope.bookss = result;
			$rootScope.flags.save = true;
			$rootScope.loading=false;
			window.location.href = "#/books/list"
		},
		function (error) {
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
			$rootScope.loading=false;
		});
	}
}
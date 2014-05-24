'use strict';
function BooksCtrl(DAO, $rootScope, $filter, ngTableParams)
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
	
	if(!$rootScope.books){
		$rootScope.filter = ""
		$rootScope.bookss = [];
		$rootScope.books = {};
	}

	
	$rootScope.getAllBooks = function () {
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
		 DAO.query({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller: 'books', action: 'list'},	
		 	$rootScope.loadingSite=true,
		 	function (result) {
			 	var putIt  = params.sorting() ? $filter('orderBy')(result, params.orderBy()): id;
			 	params.total(putIt.length);
                $defer.resolve(putIt.slice((params.page() - 1) * params.count(), params.page() * params.count()));
		        $rootScope.bookss = putIt;
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
	 
	 
	$rootScope.getAll1Books = function () {
		//get all
		$rootScope.errors.errorMessages=[];
		DAO.query({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller: 'books', action: 'list'},
		$rootScope.loadingSite=true,
		function (result) {
			$rootScope.bookss = result;
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

	$rootScope.newBooks = function () {
		$rootScope.loadingSite=true;
		$rootScope.books = {};
		$rootScope.loadingSite=false;
		window.location.href = "#/books/create"		
	}

	$rootScope.manualSaveBooks = function () {
		$rootScope.loadingSite=true;
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
		$rootScope.errors.errorMessages=[];
		DAO.save({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.books, controller:'books', action:'save'},
		function (result) {
			$rootScope.books = result;
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

	$rootScope.updateBooks = function () {
		$rootScope.errors.errorMessages=[];
		DAO.update({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.books, controller:'books', action:'update'},
		$rootScope.loadingSite=true,
		function (result) {
			$rootScope.bookss = result;
			$rootScope.flags.save = true;
			$rootScope.loadingSite=false;
			window.location.href = "#/books/list"
		},
		function (error) {
			$rootScope.flags.save = false;
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
			$rootScope.loadingSite=false;
		});
	}

	$rootScope.editBooks = function (books){
		$rootScope.errors.errorMessages=[];
		DAO.get({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.books, id: books.id, controller:'books', action:'show'},
		$rootScope.loadingSite=true,
		function (result) {
			$rootScope.books = result;
			$rootScope.flags.save = true;
			$rootScope.loadingSite=false;
			window.location.href = "#/books/edit"
		},
		function (error) {
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push('Error: '+error.status+' '+error.data);
			$rootScope.loadingSite=false;
		});
	}

	$rootScope.confirmDeleteBooks = function () {
		$rootScope.errors.errorMessages=[];
		DAO.delete({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.books, id: $rootScope.books.id, controller:'books', action:'delete'},
		$rootScope.loadingSite=true,
		function (result) {
			//$rootScope.bookss = result;
			$rootScope.flags.save = true;
			$rootScope.loadingSite=false;
			window.location.href = "#/books/list"
		},
		function (error) {
			$rootScope.errors.showErrors = true;
			$rootScope.errors.showServerError = true;
			$rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
			$rootScope.loadingSite=false;
		});
	}
}
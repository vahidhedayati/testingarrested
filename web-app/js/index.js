'use strict';
var testingarrested = angular.module('testingarrested', ['services','ngRoute']);
testingarrested.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/login', {templateUrl: '/testingarrested/auth/showLogin', controller: 'UserCtrl'}).
            when('/signup', {templateUrl: '/testingarrested/auth/showSignup', controller: 'UserCtrl'}).
            when('/updatepassword', {templateUrl: '/testingarrested/auth/showUpdatePassword', controller: 'UserCtrl'}).
            when('/updateusername', {templateUrl: '/testingarrested/auth/showUpdateUsername', controller: 'UserCtrl'}).
            when('/confirmupdate', {templateUrl: '/testingarrested/auth/showUpdated', controller: 'UserCtrl'}).
            when('/numbers/create', {templateUrl: '/testingarrested/numbers/edit', controller: 'NumbersCtrl'}).
            when('/numbers/edit', {templateUrl: '/testingarrested/numbers/edit', controller: 'NumbersCtrl'}).
            when('/numbers/list', {templateUrl: '/testingarrested/numbers/listing', controller: 'NumbersCtrl'}).
            when('/numbers', {templateUrl: '/testingarrested/numbers/listing', controller: 'NumbersCtrl'}).
            when('/books/create', {templateUrl: '/testingarrested/books/edit', controller: 'BooksCtrl'}).
            when('/books/edit', {templateUrl: '/testingarrested/books/edit', controller: 'BooksCtrl'}).
            when('/books/list', {templateUrl: '/testingarrested/books/listing', controller: 'BooksCtrl'}).
            when('/books', {templateUrl: '/testingarrested/books/listing', controller: 'BooksCtrl'}).
            when('/authors/create', {templateUrl: '/testingarrested/authors/edit', controller: 'AuthorsCtrl'}).
            when('/authors/edit', {templateUrl: '/testingarrested/authors/edit', controller: 'AuthorsCtrl'}).
            when('/authors/list', {templateUrl: '/testingarrested/authors/listing', controller: 'AuthorsCtrl'}).
            when('/authors', {templateUrl: '/testingarrested/authors/listing', controller: 'AuthorsCtrl'}).
            otherwise({redirectTo: '/login'});
    }
]);

// Password matching directive
testingarrested.directive('passwordMatch', [function () {
	return {
	restrict: 'A',
	scope:true,
	require: 'ngModel',
	link: function (scope, elem , attrs,control) {
		var checker = function () {
		//get the value of the first password
		var e1 = scope.$eval(attrs.ngModel);
		//get the value of the other password
		var e2 = scope.$eval(attrs.passwordMatch);
		return e1 == e2;
	};
	scope.$watch(checker, function (n) {
		//set the form control to valid if both
		//passwords are the same, else invalid
		control.$setValidity('unique', n);
	});
	}
	};
}]);
//uniqueUsername directive
testingarrested.directive('uniqueUsername', ["$http", function($http){
    return{
        require: 'ngModel',
			link: function (scope, element, attrs, ctrl) {
            	element.bind('blur', function (e) {
               	 if (!ctrl || !element.val()) return;
                	var currentValue = element.val();
					$http.put('auth/lookup', {username: currentValue}).success(function (res) {
					ctrl.$setValidity('uniquser', true);
				}).error(function (res) {
					ctrl.$setValidity('uniquser', false);
				});
				});
			}	
    };
}]);



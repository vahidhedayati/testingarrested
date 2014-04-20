'use strict';
var testingarrested = angular.module('testingarrested', ['services','ngRoute']);
testingarrested.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/login', {templateUrl: '/testingarrested/auth/showLogin', controller: 'UserCtrl'}).
            when('/signup', {templateUrl: '/testingarrested/auth/showSignup', controller: 'UserCtrl'}).
            when('/authors/create', {templateUrl: '/testingarrested/authors/edit', controller: 'AuthorsCtrl'}).
            when('/authors/edit', {templateUrl: '/testingarrested/authors/edit', controller: 'AuthorsCtrl'}).
            when('/authors/list', {templateUrl: '/testingarrested/authors/listing', controller: 'AuthorsCtrl'}).
            when('/authors', {templateUrl: '/testingarrested/authors/listing', controller: 'AuthorsCtrl'}).
            when('/upload/create', {templateUrl: '/testingarrested/upload/edit', controller: 'UploadCtrl'}).
            when('/upload/edit', {templateUrl: '/testingarrested/upload/edit', controller: 'UploadCtrl'}).
            when('/upload/list', {templateUrl: '/testingarrested/upload/listing', controller: 'UploadCtrl'}).
            when('/upload', {templateUrl: '/testingarrested/upload/listing', controller: 'UploadCtrl'}).
            when('/numbers/create', {templateUrl: '/testingarrested/numbers/edit', controller: 'NumbersCtrl'}).
            when('/numbers/edit', {templateUrl: '/testingarrested/numbers/edit', controller: 'NumbersCtrl'}).
            when('/numbers/list', {templateUrl: '/testingarrested/numbers/listing', controller: 'NumbersCtrl'}).
            when('/numbers', {templateUrl: '/testingarrested/numbers/listing', controller: 'NumbersCtrl'}).
            when('/books/create', {templateUrl: '/testingarrested/books/edit', controller: 'BooksCtrl'}).
            when('/books/edit', {templateUrl: '/testingarrested/books/edit', controller: 'BooksCtrl'}).
            when('/books/list', {templateUrl: '/testingarrested/books/listing', controller: 'BooksCtrl'}).
            when('/books', {templateUrl: '/testingarrested/books/listing', controller: 'BooksCtrl'}).
            otherwise({redirectTo: '/login'});
    }
]);
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

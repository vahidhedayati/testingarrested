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
            when('/authors/create', {templateUrl: '/testingarrested/authors/edit', controller: 'AuthorsCtrl'}).
            when('/authors/edit', {templateUrl: '/testingarrested/authors/edit', controller: 'AuthorsCtrl'}).
            when('/authors/list', {templateUrl: '/testingarrested/authors/listing', controller: 'AuthorsCtrl'}).
            when('/authors', {templateUrl: '/testingarrested/authors/listing', controller: 'AuthorsCtrl'}).
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

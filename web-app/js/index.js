'use strict';
var testingarrested = angular.module('testingarrested', ['services','ngRoute']);
testingarrested.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/login', {templateUrl: 'Views/auth/login.html', controller: 'UserCtrl'}).
            when('/authors/create', {templateUrl: 'Views/authors/edit.html', controller: 'AuthorsCtrl'}).
            when('/authors/edit', {templateUrl: 'Views/authors/edit.html', controller: 'AuthorsCtrl'}).
            when('/authors/list', {templateUrl: 'Views/authors/list.html', controller: 'AuthorsCtrl'}).
            when('/authors', {templateUrl: 'Views/authors/list.html', controller: 'AuthorsCtrl'}).
            when('/books/create', {templateUrl: 'Views/books/edit.html', controller: 'BooksCtrl'}).
            when('/books/edit', {templateUrl: 'Views/books/edit.html', controller: 'BooksCtrl'}).
            when('/books/list', {templateUrl: 'Views/books/list.html', controller: 'BooksCtrl'}).
            when('/books', {templateUrl: 'Views/books/list.html', controller: 'BooksCtrl'}).
            otherwise({redirectTo: '/login'});
    }
]);

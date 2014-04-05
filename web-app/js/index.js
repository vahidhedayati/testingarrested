'use strict';
var testingarrested = angular.module('testingarrested', ['services','ngRoute']);
testingarrested.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/login', {templateUrl: 'static/Views/auth/login.html', controller: 'UserCtrl'}).
            when('/authors/create', {templateUrl: 'static/Views/authors/edit.html', controller: 'AuthorsCtrl'}).
            when('/authors/edit', {templateUrl: 'static/Views/authors/edit.html', controller: 'AuthorsCtrl'}).
            when('/authors/list', {templateUrl: 'static/Views/authors/list.html', controller: 'AuthorsCtrl'}).
            when('/authors', {templateUrl: 'static/Views/authors/list.html', controller: 'AuthorsCtrl'}).
            when('/books/create', {templateUrl: 'static/Views/books/edit.html', controller: 'BooksCtrl'}).
            when('/books/edit', {templateUrl: 'static/Views/books/edit.html', controller: 'BooksCtrl'}).
            when('/books/list', {templateUrl: 'static/Views/books/list.html', controller: 'BooksCtrl'}).
            when('/books', {templateUrl: 'static/Views/books/list.html', controller: 'BooksCtrl'}).
            otherwise({redirectTo: '/login'});
    }
]);

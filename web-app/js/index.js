'use strict';
var testingarrested = angular.module('testingarrested', ['services','ngRoute']);
testingarrested.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/login', {templateUrl: 'Views/auth/login.html', controller: 'UserCtrl'}).
            when('/signup', {templateUrl: 'Views/auth/signup.html', controller: 'UserCtrl'}).
            when('/authors/create', {templateUrl: 'Views/authors/edit.html', controller: 'AuthorsCtrl'}).
            when('/authors/edit', {templateUrl: 'Views/authors/edit.html', controller: 'AuthorsCtrl'}).
            when('/authors/list', {templateUrl: 'Views/authors/list.html', controller: 'AuthorsCtrl'}).
            when('/authors', {templateUrl: 'Views/authors/list.html', controller: 'AuthorsCtrl'}).
            when('/upload/create', {templateUrl: 'Views/upload/edit.html', controller: 'UploadCtrl'}).
            when('/upload/edit', {templateUrl: 'Views/upload/edit.html', controller: 'UploadCtrl'}).
            when('/upload/list', {templateUrl: 'Views/upload/list.html', controller: 'UploadCtrl'}).
            when('/upload', {templateUrl: 'Views/upload/list.html', controller: 'UploadCtrl'}).
            when('/numbers/create', {templateUrl: 'Views/numbers/edit.html', controller: 'NumbersCtrl'}).
            when('/numbers/edit', {templateUrl: 'Views/numbers/edit.html', controller: 'NumbersCtrl'}).
            when('/numbers/list', {templateUrl: 'Views/numbers/list.html', controller: 'NumbersCtrl'}).
            when('/numbers', {templateUrl: 'Views/numbers/list.html', controller: 'NumbersCtrl'}).
            when('/books/create', {templateUrl: 'Views/books/edit.html', controller: 'BooksCtrl'}).
            when('/books/edit', {templateUrl: 'Views/books/edit.html', controller: 'BooksCtrl'}).
            when('/books/list', {templateUrl: 'Views/books/list.html', controller: 'BooksCtrl'}).
            when('/books', {templateUrl: 'Views/books/list.html', controller: 'BooksCtrl'}).
            
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
                control.$setValidity("unique", n);
            });
        }
    };
}]);
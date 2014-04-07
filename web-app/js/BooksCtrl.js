'use strict';
function BooksCtrl(DAO, $rootScope)
{
    if ($rootScope.appConfig) {
        if (!$rootScope.appConfig.token!='') {
            window.location.href = "#/login"
        }
    }

    $rootScope.flags = {save: false};
    $rootScope.errors = {showErrors: false, showServerError: false};

    if(!$rootScope.books){
    $rootScope.filter = ""
    $rootScope.bookss = [];
    $rootScope.books = {};
    }

    $rootScope.getAllBooks = function () {
        //get all
        DAO.query({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller: 'books', action: 'list'},
            function (result) {
                $rootScope.bookss = result;
            },
            function (error) {
            });
    };

    $rootScope.newBooks = function () {
    $rootScope.books = {};
    window.location.href = "#/books/create"
}

    $rootScope.manualSaveBooks = function () {
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
        },
        function (error) {
            $rootScope.flags.save = false;
            $rootScope.errors.showErrors = true;
            $rootScope.errors.showServerError = true;
        }
)
    ;
}

$rootScope.updateBooks = function () {
    DAO.update({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.books, controller:'books', action:'update'},
    function (result) {
        $rootScope.flags.save = true;
    },
    function (error) {
        $rootScope.flags.save = false;
        $rootScope.errors.showErrors = true;
        $rootScope.errors.showServerError = true;
    }
)
;
}

$rootScope.editBooks = function (books){
    DAO.get({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, id: books.id, controller:'books', action:'show'},
function (result) {
    $rootScope.books = result;
    window.location.href = "#/books/edit"
}
,
function (error) {
    $rootScope.errors.showErrors = true;
    $rootScope.errors.showServerError = true;
});
}

$rootScope.confirmDeleteBooks = function () {
    DAO.delete({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, id: $rootScope.books.id, controller:'books', action:'delete'},
    function (result) {
        if (result.response == "Books_deleted") {
            window.location.href = "#/books/list"
        }
    },
    function (error) {
        $rootScope.errors.showErrors = true;
        $rootScope.errors.showServerError = true;
    }
);}
}
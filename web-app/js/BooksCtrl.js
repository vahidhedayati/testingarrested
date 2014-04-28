'use strict';
function BooksCtrl(DAO, $rootScope)
{
    if ($rootScope.appConfig) {
        if (!$rootScope.appConfig.token!='') {
            window.location.href = "#/login"
        }
    }

    $rootScope.flags = {save: false};
    $rootScope.errors = {showErrors: false, showServerError: false,errorMessages:''};

    if(!$rootScope.books){
    $rootScope.filter = ""
    $rootScope.bookss = [];
    $rootScope.books = {};
    }

    $rootScope.getAllBooks = function () {
    	$rootScope.errors.errorMessages = [];
        //get all
        DAO.query({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller: 'books', action: 'list'},
            function (result) {
                $rootScope.bookss = result;
            },
            function (error) {
            	$rootScope.errors.showErrors = true;
                $rootScope.errors.showServerError = true;
            	$rootScope.errors.errorMessages.push('Error:  '+error.status+' '+error.data);
            });
    };

    $rootScope.newBooks = function () {
    $rootScope.books = {};
    window.location.href = "#/books/create"
}

    $rootScope.manualSaveBooks = function () {
    	$rootScope.errors.errorMessages = [];
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
    	$rootScope.errors.errorMessages = [];
        DAO.save({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.books, controller:'books', action:'save'},
        function (result) {
            $rootScope.books = result;
            $rootScope.flags.save = true;
        },
        function (error) {
            $rootScope.flags.save = false;
            $rootScope.errors.showErrors = true;
            $rootScope.errors.showServerError = true;
            $rootScope.errors.errorMessages.push('Error:  '+error.status+' '+error.data);
        }
)
    ;
}

$rootScope.updateBooks = function () {
	$rootScope.errors.errorMessages = [];
    DAO.update({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.books, controller:'books', action:'update'},
    function (result) {
        $rootScope.flags.save = true;
        //if (result.status == "200") {
        //    window.location.href = "#/books/list"
       // }
    },
    function (error) {
        $rootScope.flags.save = false;
        $rootScope.errors.showErrors = true;
        $rootScope.errors.showServerError = true;
       // $rootScope.errors.errorMessages.push('Error:  '+error.status+' '+error.data);
        window.location.href = "#/books/list"
    }
)
;
}

$rootScope.editBooks = function (books){
	$rootScope.errors.errorMessages = [];
    DAO.get({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, id: books.id, controller:'books', action:'show'},
function (result) {
    $rootScope.books = result;
    window.location.href = "#/books/edit"
}
,
function (error) {
    $rootScope.errors.showErrors = true;
    $rootScope.errors.showServerError = true;
    $rootScope.errors.errorMessages.push('Error: '+error.status+' '+error.data);
});
}

$rootScope.confirmDeleteBooks = function () {
	$rootScope.errors.errorMessages = [];
    DAO.delete({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, id: $rootScope.books.id, controller:'books', action:'delete'},
    function (result) {
        if (result.response == "Books_deleted") {
    	//if (result.status == "200") {
            window.location.href = "#/books/list"
        }
    },
    function (error) {
        $rootScope.errors.showErrors = true;
        $rootScope.errors.showServerError = true;
    }
);}
}
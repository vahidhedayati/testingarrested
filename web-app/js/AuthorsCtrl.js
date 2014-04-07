'use strict';
function AuthorsCtrl(DAO, $rootScope)
{
    if ($rootScope.appConfig) {
        if (!$rootScope.appConfig.token!='') {
            window.location.href = "#/login"
        }
    }

    $rootScope.flags = {save: false};
    $rootScope.errors = {showErrors: false, showServerError: false};

    if(!$rootScope.authors){
    $rootScope.filter = ""
    $rootScope.authorss = [];
    $rootScope.authors = {};
    }

    $rootScope.getAllAuthors = function () {
        //get all
        DAO.query({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller: 'authors', action: 'list'},
            function (result) {
                $rootScope.authorss = result;
            },
            function (error) {
            });
    };

    $rootScope.newAuthors = function () {
    $rootScope.authors = {};
    window.location.href = "#/authors/create"
}

    $rootScope.manualSaveAuthors = function () {
        $rootScope.flags.save = false;
        if ($rootScope.authors.id == undefined)
        {
            $rootScope.saveAuthors();
        }
        else
        {
            $rootScope.updateAuthors();
        }
    }

    $rootScope.saveAuthors = function () {
        DAO.save({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.authors, controller:'authors', action:'save'},
        function (result) {
            $rootScope.authors = result;
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

$rootScope.updateAuthors = function () {
    DAO.update({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.authors, controller:'authors', action:'update'},
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

$rootScope.editAuthors = function (authors){
    DAO.get({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, id: authors.id, controller:'authors', action:'show'},
function (result) {
    $rootScope.authors = result;
    window.location.href = "#/authors/edit"
}
,
function (error) {
    $rootScope.errors.showErrors = true;
    $rootScope.errors.showServerError = true;
});
}

$rootScope.confirmDeleteAuthors = function () {
    DAO.delete({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, id: $rootScope.authors.id, controller:'authors', action:'delete'},
    function (result) {
        if (result.response == "Authors_deleted") {
            window.location.href = "#/authors/list"
        }
    },
    function (error) {
        $rootScope.errors.showErrors = true;
        $rootScope.errors.showServerError = true;
    }
);}
}
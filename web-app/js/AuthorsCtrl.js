'use strict';
function AuthorsCtrl(DAO, $rootScope)
{
    if ($rootScope.appConfig) {
        if (!$rootScope.appConfig.token!='') {
            window.location.href = "#/login"
        }
    }

    $rootScope.flags = {save: false};
    $rootScope.errors = {showErrors: false, showServerError: false,errorMessages:''};

    if(!$rootScope.authors){
    $rootScope.filter = ""
    $rootScope.authorss = [];
    $rootScope.authors = {};
    }

    $rootScope.getAllAuthors = function () {
    	$rootScope.errors.errorMessages = [];
        //get all
        DAO.query({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller: 'authors', action: 'list'},
            function (result) {
                $rootScope.authorss = result;
            },
            function (error) {
            	$rootScope.errors.showErrors = true;
                $rootScope.errors.showServerError = true;
            	$rootScope.errors.errorMessages.push('Error:  '+error.status+' '+error.data);
            });
    };

    $rootScope.newAuthors = function () {
    $rootScope.authors = {};
    window.location.href = "#/authors/create"
}

    $rootScope.manualSaveAuthors = function () {
    	$rootScope.errors.errorMessages = [];
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
    	$rootScope.errors.errorMessages = [];
        DAO.save({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.authors, controller:'authors', action:'save'},
        function (result) {
            $rootScope.authors = result;
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

$rootScope.updateAuthors = function () {
	$rootScope.errors.errorMessages = [];
    DAO.update({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.authors, controller:'authors', action:'update'},
    function (result) {
        $rootScope.flags.save = true;
        //if (result.status == "200") {
        //    window.location.href = "#/authors/list"
       // }
    },
    function (error) {
        $rootScope.flags.save = false;
        $rootScope.errors.showErrors = true;
        $rootScope.errors.showServerError = true;
       // $rootScope.errors.errorMessages.push('Error:  '+error.status+' '+error.data);
        window.location.href = "#/authors/list"
    }
)
;
}

$rootScope.editAuthors = function (authors){
	$rootScope.errors.errorMessages = [];
    DAO.get({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, id: authors.id, controller:'authors', action:'show'},
function (result) {
    $rootScope.authors = result;
    window.location.href = "#/authors/edit"
}
,
function (error) {
    $rootScope.errors.showErrors = true;
    $rootScope.errors.showServerError = true;
    $rootScope.errors.errorMessages.push('Error: '+error.status+' '+error.data);
});
}

$rootScope.confirmDeleteAuthors = function () {
	$rootScope.errors.errorMessages = [];
    DAO.delete({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, id: $rootScope.authors.id, controller:'authors', action:'delete'},
    function (result) {
        if (result.response == "Authors_deleted") {
    	//if (result.status == "200") {
            window.location.href = "#/authors/list"
        }
    },
    function (error) {
        $rootScope.errors.showErrors = true;
        $rootScope.errors.showServerError = true;
    }
);}
}
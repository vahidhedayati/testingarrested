'use strict';
function NumbersCtrl(DAO, $rootScope)
{
    if ($rootScope.appConfig) {
        if (!$rootScope.appConfig.token!='') {
            window.location.href = "#/login"
        }
    }

    $rootScope.flags = {save: false};
    $rootScope.errors = {showErrors: false, showServerError: false,errorMessages:''};

    if(!$rootScope.numbers){
    $rootScope.filter = ""
    $rootScope.numberss = [];
    $rootScope.numbers = {};
    }

    $rootScope.getAllNumbers = function () {
    	$rootScope.errors.errorMessages = [];
        //get all
        DAO.query({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller: 'numbers', action: 'list'},
            function (result) {
                $rootScope.numberss = result;
            },
            function (error) {
            	$rootScope.errors.showErrors = true;
                $rootScope.errors.showServerError = true;
            	$rootScope.errors.errorMessages.push('Error:  '+error.status+' '+error.data);
            });
    };

    $rootScope.newNumbers = function () {
    $rootScope.numbers = {};
    window.location.href = "#/numbers/create"
}

    $rootScope.manualSaveNumbers = function () {
    	$rootScope.errors.errorMessages = [];
        $rootScope.flags.save = false;
        if ($rootScope.numbers.id == undefined)
        {
            $rootScope.saveNumbers();
        }
        else
        {
            $rootScope.updateNumbers();
        }
    }

    $rootScope.saveNumbers = function () {
    	$rootScope.errors.errorMessages = [];
        DAO.save({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.numbers, controller:'numbers', action:'save'},
        function (result) {
            $rootScope.numbers = result;
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

$rootScope.updateNumbers = function () {
	$rootScope.errors.errorMessages = [];
    DAO.update({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.numbers, controller:'numbers', action:'update'},
    function (result) {
        $rootScope.flags.save = true;
        //if (result.status == "200") {
        //    window.location.href = "#/numbers/list"
       // }
    },
    function (error) {
        $rootScope.flags.save = false;
        $rootScope.errors.showErrors = true;
        $rootScope.errors.showServerError = true;
       // $rootScope.errors.errorMessages.push('Error:  '+error.status+' '+error.data);
        window.location.href = "#/numbers/list"
    }
)
;
}

$rootScope.editNumbers = function (numbers){
	$rootScope.errors.errorMessages = [];
    DAO.get({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, id: numbers.id, controller:'numbers', action:'show'},
function (result) {
    $rootScope.numbers = result;
    window.location.href = "#/numbers/edit"
}
,
function (error) {
    $rootScope.errors.showErrors = true;
    $rootScope.errors.showServerError = true;
    $rootScope.errors.errorMessages.push('Error: '+error.status+' '+error.data);
});
}

$rootScope.confirmDeleteNumbers = function () {
	$rootScope.errors.errorMessages = [];
    DAO.delete({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, id: $rootScope.numbers.id, controller:'numbers', action:'delete'},
    function (result) {
        if (result.response == "Numbers_deleted") {
    	//if (result.status == "200") {
            window.location.href = "#/numbers/list"
        }
    },
    function (error) {
        $rootScope.errors.showErrors = true;
        $rootScope.errors.showServerError = true;
    }
);}
}
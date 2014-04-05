'use strict';
function UserCtrl($rootScope, DAO){

    if(!$rootScope.appConfig){
        $rootScope.appConfig = {serverHost:'localhost:8080', appName:'testingarrested', token:''};
        $rootScope.user = {username:'', passwordHash:''};
        $rootScope.errors = {forgotPassword:false, showErrors:false, showMessage:false, showFunctionError:false, showServerError:false, showPasswordError:false};
    }

    function initializeVariables(){
        $rootScope.appConfig = {serverHost:'localhost:8080', appName:'testingarrested', token:''};
        $rootScope.user = {username:'', passwordHash:''};
        $rootScope.errors = {forgotPassword:false, showErrors:false, showMessage:false, showFunctionError:false, showServerError:false, showPasswordError:false};
    }

    $rootScope.errorValidation = function(){
        $rootScope.errors = {forgotPassword:false, showErrors:false, showMessage:false, showFunctionError:false, showServerError:false, showPasswordError:false};
    };

    $rootScope.login = function(){
        DAO.save({serverHost: $rootScope.appConfig.serverHost, appName: $rootScope.appConfig.appName, controller:'auth', action:'login', username:$rootScope.user.username, passwordHash:$rootScope.user.passwordHash},
            function(result){
                if(result.response == "bad_login"){
                    $rootScope.errors.showErrors = true;
                    $rootScope.errors.showFunctionError = true;
                }
                else{
                    $rootScope.user = result;
                    $rootScope.appConfig.token = result.token;
                    delete $rootScope.user.token;
                    window.location.href="#/"
                }
            },
            function(error){
                $rootScope.errors.showErrors = true;
                $rootScope.errors.showServerError = true;
            });
    };

    $rootScope.logout = function(){
        DAO.get({serverHost: $rootScope.appConfig.serverHost, appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller:'auth', action:'logout'},
            function(result){
                initializeVariables();
                window.location.href="#/login"
            },
            function(error){
                $rootScope.errors.showErrors = true;
                $rootScope.errors.showServerError = true;
            });
    };

    $rootScope.register = function(){
        DAO.save({serverHost: $rootScope.appConfig.serverHost, appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller:'user', action:'save', instance:$rootScope.user},
            function(result){
                if(result.response == "user_created"){
                    $rootScope.errors.showMessage = true;
                    window.location.href="#/"
                }
                else if(result.response == "email_used"){
                    $rootScope.errors.showErrors = true;
                    $rootScope.errors.showFunctionError = true;
                }
            },
            function(error){
                $rootScope.errors.showErrors = true;
                $rootScope.errors.showServerError = true;
            });
    };

    $rootScope.updateProfile= function(){
        DAO.update({serverHost: $rootScope.appConfig.serverHost, appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller:'user', action:'update', instance:$rootScope.user},
            function(result){
                if(result.response == "user_not_updated"){
                    $rootScope.errors.showErrors = true;
                    $rootScope.errors.showServerError = true;
                }
                else if(result.response == "email_used"){
                    $rootScope.errors.showErrors = true;
                    $rootScope.errors.showFunctionError = true;
                }
                else if(result.response == "user_updated"){
                    $rootScope.errors.showMessage = true;
                }
            },
            function(error){
                $rootScope.errors.showErrors = true;
                $rootScope.errors.showServerError = true;
            });
    };
}
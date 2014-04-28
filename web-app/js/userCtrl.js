'use strict';
function UserCtrl($rootScope, DAO){

    if(!$rootScope.appConfig){
        $rootScope.appConfig = {appName:'testingarrested', token:''};
        $rootScope.user = {username:'', passwordHash:''};
        $rootScope.errors = {forgotPassword:false, showErrors:false, errorMessages:'',showMessage:false, showFunctionError:false, showServerError:false, showPasswordError:false};
    }

    function initializeVariables(){
        $rootScope.appConfig = {appName:'testingarrested', token:''};
        $rootScope.user = {username:'', passwordHash:''};
        $rootScope.errors = {forgotPassword:false, showErrors:false, errorMessages:'',showMessage:false, showFunctionError:false, showServerError:false, showPasswordError:false};
    }

    $rootScope.errorValidation = function(){
        $rootScope.errors = {forgotPassword:false, showErrors:false, errorMessages:'',showMessage:false, showFunctionError:false, showServerError:false, showPasswordError:false};
    };

    $rootScope.signup = function(){
    	$rootScope.errors.errorMessages = [];
        DAO.save({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller:'arrestedUser', action:'save' , username:$rootScope.user.username, passwordHash:$rootScope.user.passwordHash, passwordConfirm:$rootScope.user.passwordConfirm},
        function(result){
               if(result.response == "user_created"){
                   $rootScope.errors.showMessage = true;
                   $rootScope.errors.errorMessages.push('user_created: '+result.status+' '+result.content);
                   window.location.href="#/"
                   
               }
               else if(result.response == "email_used"){
                   $rootScope.errors.showErrors = true;
                   $rootScope.errors.showFunctionError = true;
                   $rootScope.errors.errorMessages.push('email_used:  '+result.status+' '+result.content);
                   
               }else{
                   $rootScope.user = result;
                   $rootScope.appConfig.token = result.token;
                   delete $rootScope.user.token;
                   window.location.href="#/"
               }
           },
           function(error){
               $rootScope.errors.showErrors = true;
               $rootScope.errors.showServerError = true;
               $rootScope.errors.errorMessages.push('Error:  '+error.status+' '+error.data);
           });
    };
    
    $rootScope.login = function(){
    	$rootScope.errors.errorMessages = [];
        DAO.save({appName: $rootScope.appConfig.appName, controller:'auth', action:'login', username:$rootScope.user.username, passwordHash:$rootScope.user.passwordHash},
            function(result){
                if(result.response == "bad_login"){
                    $rootScope.errors.showErrors = true;
                    $rootScope.errors.showFunctionError = true;
                    $rootScope.errors.errorMessages.push('Bad login:  '+result.status+' '+result.content);
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
                $rootScope.errors.errorMessages.push('Error:  '+error.status+' '+error.data);
            });
    };

    $rootScope.logout = function(){
    	$rootScope.errors.errorMessages = [];
        DAO.get({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller:'auth', action:'logout'},
            function(result){
                initializeVariables();
                window.location.href="#/login"
            },
            function(error){
                $rootScope.errors.showErrors = true;
                $rootScope.errors.showServerError = true;
                $rootScope.errors.errorMessages.push('Error:  '+error.status+' '+error.data);
            });
    };

   

    $rootScope.updateProfile= function(){
    	$rootScope.errors.errorMessages = [];
        DAO.update({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller:'user', action:'update', instance:$rootScope.user},
            function(result){
                if(result.response == "user_not_updated"){
                    $rootScope.errors.showErrors = true;
                    $rootScope.errors.showServerError = true;
                    $rootScope.errors.errorMessages.push('user_not_updated:  '+result.status+' '+result.content);
                }
                else if(result.response == "email_used"){
                    $rootScope.errors.showErrors = true;
                    $rootScope.errors.showFunctionError = true;
                    $rootScope.errors.errorMessages.push('email_used:  '+result.status+' '+result.content);
                }
                else if(result.response == "user_updated"){
                    $rootScope.errors.showMessage = true;
                    $rootScope.errors.errorMessages.push('user_updated:  '+result.status+' '+result.content);
                }
            },
            function(error){
                $rootScope.errors.showErrors = true;
                $rootScope.errors.showServerError = true;
                $rootScope.errors.errorMessages.push('Error:  '+error.status+' '+error.data);
            });
    };
}
'use strict';
function UserCtrl($rootScope,$scope, DAO){
	
	
	$scope.clock = { now: new Date() };
	
    if(!$rootScope.appConfig){
        $rootScope.appConfig = {appName:'testingarrested', token:''};
        $rootScope.user = {username:'', passwordHash:''};
        $rootScope.errors = {selectedController:'', loadingSite: false, forgotPassword:false, showErrors:false, errorMessages:[],showMessage:false, showFunctionError:false, showServerError:false, showPasswordError:false};
    }

    function initializeVariables(){
        $rootScope.appConfig = {appName:'testingarrested', token:''};
        $rootScope.user = {username:'', passwordHash:''};
        $rootScope.errors = {selectedController:'', loadingSite: false, forgotPassword:false, showErrors:false, errorMessages:[],showMessage:false, showFunctionError:false, showServerError:false, showPasswordError:false};
    }

    $rootScope.errorValidation = function(){
        $rootScope.errors = {loadingSite: true, forgotPassword:false, showErrors:false, errorMessages:[],showMessage:false, showFunctionError:false, showServerError:false, showPasswordError:false};
    };

    $rootScope.setSelectedController = function(name) {
    	$rootScope.selectedController=name;
    };
    	 
    $rootScope.isSelected = function(name) {
      if ($rootScope.selectedController) {
       return $rootScope.selectedController===name;
      }
    };
    	 
    

    var updateClock = function() {
    	var s = "";
    	var cu = new Date();
    	var x = new Array("Sunday", "Monday", "Tuesday","Wednesday","Thursday", "Friday","Saturday");
    	var day = cu.getDay();
    	var today= x[day];
    	s +=today +" [ ";
    	s += cu.getDate() +"/";
    	s += cu.getMonth() +"/";
    	s += cu.getFullYear() +"  ";
    	s += cu.getHours() +":";
    	s += cu.getMinutes() +":";
    	s += cu.getSeconds() +" ";
    	//s += cu.getMilliseconds()+"] ";
    	s +=cu.toString().match(/\(([A-Za-z\s].*)\)/)[1];
    	s += "] "
    	$scope.clock.now=s;  
    };
    setInterval(function() {
    	$scope.$apply(updateClock);
    }, 1000);
    updateClock();
    
    $rootScope.setLang= function(lang){
    	$rootScope.errors.errorMessages=[];
        DAO.update({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller:'auth', action:'setLang', instance:lang},
    	$rootScope.loadingSite=true,
    	function(result){
            	$rootScope.user = result;
            	$rootScope.loadingSite=false;
            	window.location.href="/testingarrested/"
        },
        function(error){
            $rootScope.errors.showErrors = true;
            $rootScope.errors.showServerError = true;
            $rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
            $rootScope.loadingSite=false;
        });
    };
 
    $rootScope.signup = function(){
    	$rootScope.errors.errorMessages=[];
        DAO.save({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller:'arrestedUser', action:'save' , username:$rootScope.user.username, passwordHash:$rootScope.user.passwordHash, passwordConfirm:$rootScope.user.passwordConfirm},
        $rootScope.loadingSite=true,
        function(result){
        	$rootScope.user = result;
        	$rootScope.appConfig.token = result.token;
        	delete $rootScope.user.token;
        	$rootScope.loadingSite=false;
        	window.location.href="#/"
        },
        function(error){
        	$rootScope.errors.showErrors = true;
        	$rootScope.errors.showServerError = true;
        	$rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
        	$rootScope.loadingSite=false;
        });
    };
    
    $rootScope.login = function(){
    	$rootScope.errors.errorMessages=[];
        DAO.save({appName: $rootScope.appConfig.appName, controller:'auth', action:'login', username:$rootScope.user.username, passwordHash:$rootScope.user.passwordHash},
        $rootScope.loadingSite=true,
        function(result){
        	$rootScope.user = result;
        	$rootScope.appConfig.token = result.token;
            delete $rootScope.user.token;
            $rootScope.loadingSite=false;
            window.location.href="#/"
        },
        function(error){
        	$rootScope.errors.showErrors = true;
        	$rootScope.errors.showServerError = true;
        	$rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
        	$rootScope.loadingSite=false;
        });
    };

    $rootScope.logout = function(){
    	$rootScope.errors.errorMessages=[];
        DAO.get({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller:'auth', action:'logout'},
        $rootScope.loadingSite=true,
        function(result){
        	$rootScope.loadingSite=true;
        	initializeVariables();
        	$rootScope.loadingSite=false;
        	window.location.href="#/login"
        },
        function(error){
        	$rootScope.errors.showErrors = true;
        	$rootScope.errors.showServerError = true;
        	$rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
        	$rootScope.loadingSite=false;
        });
	};

   
	 $rootScope.updatePassword= function(){
		 $rootScope.errors.errorMessages=[];
	        DAO.update({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller:'arrestedUser', action:'updatePassword', instance:$rootScope.user},
        	$rootScope.loadingSite=true,
        	function(result){
                	$rootScope.user = result;
                	$rootScope.loadingSite=false;
                	window.location.href="#/confirmupdate"
            },
            function(error){
                $rootScope.errors.showErrors = true;
                $rootScope.errors.showServerError = true;
                $rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
                $rootScope.loadingSite=false;
            });
    };
    
    $rootScope.updateUsername= function(){
    	$rootScope.errors.errorMessages=[];
        DAO.update({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller:'arrestedUser', action:'updateUsername', instance:$rootScope.user},
    	$rootScope.loadingSite=true,
    	function(result){
            	$rootScope.user = result;
            	$rootScope.loadingSite=false;
            	window.location.href="#/confirmupdate"
        },
        function(error){
            $rootScope.errors.showErrors = true;
            $rootScope.errors.showServerError = true;
            $rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
            $rootScope.loadingSite=false;
        });
    };
    
    $rootScope.updateProfile= function(){
    	$rootScope.errors.errorMessages=[];
        DAO.update({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller:'arrestedUser', action:'update', instance:$rootScope.user},
        	$rootScope.loadingSite=true,
        	function(result){
        		if(result.response == "user_not_updated"){
        			$rootScope.errors.showErrors = true;
        			$rootScope.errors.showServerError = true;
        			$rootScope.errors.errorMessages.push('user_not_updated:  '+result.status+' '+result.content);
        			$rootScope.loadingSite=false;
        		}
        		else if(result.response == "email_used"){
        			$rootScope.errors.showErrors = true;
        			$rootScope.errors.showFunctionError = true;
        			$rootScope.errors.errorMessages.push('email_used:  '+result.status+' '+result.content);
        			$rootScope.loadingSite=false;
        		}
                else if(result.response == "user_updated"){
                	$rootScope.errors.showMessage = true;
                	$rootScope.errors.errorMessages.push('user_updated:  '+result.status+' '+result.content);
                	$rootScope.loadingSite=false;
                }else{
                	$rootScope.user = result;
                	$rootScope.loadingSite=false;
                	window.location.href="#/"
                }
        		
            },
            function(error){
                $rootScope.errors.showErrors = true;
                $rootScope.errors.showServerError = true;
                $rootScope.errors.errorMessages.push(''+error.status+' '+error.data);
                $rootScope.loadingSite=false;
            });
    };
}
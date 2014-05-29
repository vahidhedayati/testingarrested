<div data-ng-show="errors.showErrors" class="red">
	<div ng-repeat="error in errors.errorMessages">
		<strong></strong> <span ng-bind="error"></span>
	</div>
</div>


<div data-ng-controller="UserCtrl"  data-ng-show="appConfig.token!=''">
<div class="container" >
   <div class="row">
        <div class="col-md-6 col-md-offset-2" >
            <div class="panel panel-default">
                <div class="panel-body">
                <h1 class="text-center"><g:message code="default.update.title" args="['Username']"/></h1>
                  
                    <form name="signUpForm1"  class="form form-signup" role="form" novalidate>
 	
 		 			<div class="form-group">
                    <div  class="control-group" ng-class="{'has-error': signUpForm1.username.$invalid && (signUpForm1.username.$dirty || signUpForm1.username.$pristine), 'has-success': !signUpForm1.username.$invalid && signUpForm1.username.$dirty && !signUpForm1.username.$pristine}" >
                    <div class="input-group">
                    	<span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                       	<input type="text" name="username" data-ng-model="user.username" class="form-control" placeholder="${message(code: 'security.newusername.label', default: 'New username')}"  ng-minlength="4" ng-maxlength="40" value="" autocomplete="off" required="required"  unique-username />
						<span ng-show="!signUpForm1.username.$pristine && signUpForm1.username.$invalid" class="help-inline"><g:message code="default.invalid.label" args="['username']" default=" Invalid Username : " /></span>
						<span ng-show="signUpForm1.username.$error.minlength" class="help-inline"><g:message code="default.minlength.label" args="['username']" default=" Username too short "/></span>
						<span ng-show="signUpForm1.username.$error.maxlength" class="help-inline"><g:message code="default.maxlength.label" args="['username']" default=" Username too long "/></span>
						<small class="error" ng-show="signUpForm1.username.$error.uniquser"><g:message code="default.unique.label" args="['username']" default=" Username already taken "/></small>
					</div>
                	</div>
                    </div>
 	

	               
                        	
                   <div class="right-inner-addon ">
                   <i class="glyphicon glyphicon glyphicon-plus"></i>
                        <input class="btn btn-sm btn-primary btn-block"  ng-disabled="signUpForm1.$invalid" ng-enabled="!signUpForm1.$invalid" type="submit" value="${message(code: 'default.username.update', default: 'Update username')}"  data-ng-click="updateUsername()"/>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
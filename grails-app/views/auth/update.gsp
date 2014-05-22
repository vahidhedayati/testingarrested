<div data-ng-show="errors.showErrors" class="red">
	<div ng-repeat="error in errors.errorMessages">
		<strong></strong> <span ng-bind="error"></span>
	</div>
</div>


<div data-ng-controller="UserCtrl"  data-ng-show="appConfig.token!=''">
<div id="arrestedHeader" role="banner"><h1 id="h1Header"><g:message code="default.update.title" args="['Password']"/></h1></div>
<div class="container" >
   <div class="row">
        <div class="col-md-6 col-md-offset-2" >
            <div class="panel panel-default">
                <div class="panel-body">
                  
                    <form name="signUpForm1"  class="form form-signup" role="form" novalidate>
 	
 		 	

	                <div class="form-group">
	                <div  class="control-group" ng-class="{'has-error': (signUpForm1.password.$invalid || signUpForm1.password.$error.pattern) && (signUpForm1.password.$dirty || signUpForm1.password.$pristine),  'has-success': !signUpForm1.password.$invalid && signUpForm1.password.$dirty&&!signUpForm1.password.$pristine && !signUpForm1.password.$error.pattern  }" >
					<div class="input-group">
                     	<span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                        <input type="text" name="preventAutoPass" id="preventAutoPass" style="display:none" />
                        <input type="password" name="password" data-ng-model="user.passwordHash"   ng-pattern="/^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W]).*$/"  ng-maxlength="10" class="form-control" ng-minlength="1" placeholder="${message(code: 'security.password.label', default: 'Password')}" autocomplete="off" required="required"/>
						<span ng-show="!signUpForm1.password.$pristine && signUpForm1.password.$invalid" class="help-inline"><g:message code="default.invalid.label" args="['password']" default="Invalid password"/></span>
						<span ng-show="signUpForm1.password.$error.maxlength" class="help-inline"><g:message code="default.maxlength.label" args="['password']" default="Password too long"/></span>
						<span ng-show="signUpForm1.password.$error.pattern" class="help-inline"><g:message code="default.password.pattern.label" args="['password']" default="password must be 8 characters, at least 1 uppercase character and 1 digit or special character."/></span>
					</div>
                    </div>
			  		</div>
			  		
                    <div class="form-group">
                      	<div  class="control-group" ng-class="{'has-error': signUpForm1.passwordConfirm.$invalid && signUpForm1.passwordConfirm.$error.unique && (signUpForm1.passwordConfirm.$dirty || signUpForm1.passwordConfirm.$pristine) , 'has-success':((!signUpForm1.passwordConfirm.$invalid || !signUpForm1.passwordConfirm.$error.unique) && (signUpForm1.passwordConfirm.$dirty && !signUpForm1.passwordConfirm.$pristine ))}" >
                        <div class="input-group">
                        <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                        <input type="text" name="preventAutoPass" id="preventAutoPass" style="display:none" />
                        <input type="password" name="passwordConfirm" data-ng-model="user.passwordConfirm"   password-match="user.passwordHash" class="form-control"  ng-maxlength="10" placeholder="${message(code: 'security.password.confirm.label', default: 'Confirm Password')}" autocomplete="off" required="required"/>
						<span ng-show="!signUpForm1.passwordConfirm.$pristine && signUpForm1.username.$invalid" class="help-inline"><g:message code="default.invalid.label" args="['passwordConfirm']" default="Invalid passwordConfirm"/></span>
						<span ng-show="signUpForm1.passwordConfirm.$error.maxlength" class="help-inline"><g:message code="default.maxlength.label" args="['passwordConfirm']" default="Password too long"/></span>
						<span ng-show="signUpForm1.passwordConfirm.$error.unique && signUpForm1.passwordConfirm.$dirty" class="help-inline"><g:message code="default.password.unique.label" args="['password']" default="Password confirmation does not match Password"/></span>
                   </div>
                   </div>
                   </div>
                        	
                   <div class="right-inner-addon ">
                   <i class="glyphicon glyphicon glyphicon-plus"></i>
                        <input class="btn btn-sm btn-primary btn-block"  ng-disabled="signUpForm1.$invalid" ng-enabled="!signUpForm1.$invalid" type="submit" value="${message(code: 'default.password.update', default: 'Update Password')}"  data-ng-click="updatePassword()"/>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<div class="container" data-ng-controller="UserCtrl"  data-ng-hide="appConfig.token!=''">
    <div class="row">
        <div class="col-md-6 col-md-offset-2" >
            <div class="panel panel-default">
                <div class="panel-body">
                    <h5 class="text-center">
                    <a class="btn btn-sm btn-primary btn-block" onclick="window.location.href = '#/login'" title="${message(code: 'security.signin.label', default: 'Sign in')}"><span class="glyphicon glyphicon-log-in"></span> <g:message code="security.signin.label"  default="Sign in"/></a>
                    </h5>
                    <form name="signUpForm1"  class="form form-signup" role="form" novalidate>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                                <input type="text" name="username" data-ng-model="user.username" class="form-control" ng-minlength="4" ng-maxlength="10"  placeholder="${message(code: 'security.username.label', default: 'Username')}" required="" />
                                <p ng-show="signUpForm1.username.$error.required" class="help-block"><g:message code="default.required.label" args="['username']" default="Username is required"/></p>
								<p ng-show="!signUpForm1.username.$pristine && signUpForm1.username.$invalid" class="help-block"><g:message code="default.invalid.label" args="['username']" default="Invalid Username"/></p>
								<p ng-show="signUpForm1.username.$error.minlength" class="help-block"><g:message code="default.minlength.label" args="['username']" default="Username too short"/></p>
								<p ng-show="signUpForm1.username.$error.maxlength" class="help-block"><g:message code="default.maxlength.label" args="['username']" default="Username too long"/></p>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                                <input type="text" name="preventAutoPass" id="preventAutoPass" style="display:none" />
                                <input type="password" name="password" data-ng-model="user.passwordHash"   ng-pattern="/^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W]).*$/" ng-minlength="8" ng-maxlength="10" class="form-control" ng-minlength="1" placeholder="${message(code: 'security.password.label', default: 'Password')}" autocomplete="off"/>
                                <p ng-show="signUpForm1.password.$error.required" class="help-block"><g:message code="default.required.label" args="['password']" default="Password is required"/></p></p>
								<p ng-show="!signUpForm1.password.$pristine && signUpForm1.username.$invalid" class="help-block"><g:message code="default.invalid.label" args="['password']" default="Invalid password"/></p>
								<p ng-show="signUpForm1.password.$error.minlength" class="help-block"><g:message code="default.minlength.label" args="['password']" default="Password too short"/></p>
								<p ng-show="signUpForm1.password.$error.maxlength" class="help-block"><g:message code="default.maxlength.label" args="['password']" default="Password too long"/></p>
								<p ng-show="signUpForm1.password.$error.pattern" class="help-block"><g:message code="default.password.pattern.label" args="['password']" default="password must be 8 characters, at least 1 uppercase character and 1 digit or special character."/></p>
                            </div>
                        </div>
                          <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                                <input type="text" name="preventAutoPass" id="preventAutoPass" style="display:none" />
                                <input type="password" name="passwordConfirm" data-ng-model="user.passwordConfirm"   password-match="user.passwordHash" class="form-control" ng-minlength="8" ng-maxlength="10" placeholder="${message(code: 'security.password.confirm.label', default: 'Confirm Password')}" autocomplete="off"/>
                                <p ng-show="signUpForm1.passwordConfirm.$error.required" class="help-block">required.</p>
								<p ng-show="!signUpForm1.passwordConfirm.$pristine && signUpForm1.username.$invalid" class="help-block"><g:message code="default.invalid.label" args="['passwordConfirm']" default="Invalid passwordConfirm"/></p>
								<p ng-show="signUpForm1.passwordConfirm.$error.minlength" class="help-block"><g:message code="default.minlength.label" args="['passwordConfirm']" default="PasswordConfirm too short"/></p>
								<p ng-show="signUpForm1.passwordConfirm.$error.maxlength" class="help-block"><g:message code="default.maxlength.label" args="['passwordConfirm']" default="Password too long"/></p>
								<p ng-show="signUpForm1.passwordConfirm.$error.unique" class="help-block"><g:message code="default.password.unique.label" args="['password']" default="PasswordConfirm does not match Password"/></p>
                            </div>
                        </div>
                         <div class="right-inner-addon ">
                        <i class="glyphicon glyphicon glyphicon-plus"></i>
                        <input class="btn btn-sm btn-primary btn-block"  ng-disabled="signUpForm1.$invalid" ng-enabled="!signUpForm1.$invalid" type="submit" value="${message(code: 'security.register.label', default: 'Register')}"  data-ng-click="signup()"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
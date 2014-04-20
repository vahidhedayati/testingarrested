<div class="container" data-ng-controller="UserCtrl"  data-ng-hide="appConfig.token!=''">
    <div class="row">
        <div class="col-md-6 col-md-offset-2" >
            <div class="panel panel-default">
                <div class="panel-body">
                    <h5 class="text-center">
                    <a class="btn btn-sm btn-primary btn-block btn-danger" title="${message(code: 'security.register.label', default: 'Register')}" onclick="window.location.href = '#/signup'"><span class="glyphicon glyphicon-user"></span> <g:message code="security.register.label"  default="Register"/></a>
                    </h5>
                    <form name="LoginForm1"  class="form form-signup" role="form" novalidate>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                                <input type="text" name="username" data-ng-model="user.username" class="form-control" ng-minlength="1"  placeholder="${message(code: 'security.username.label', default: 'Username')}" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                                
                                <input type="text" name="preventAutoPass" id="preventAutoPass" style="display:none" />
                               
                                <input type="password" name="password" data-ng-model="user.passwordHash"  class="form-control" ng-minlength="1" placeholder="${message(code: 'security.password.label', default: 'Password')}" autocomplete="off"/>
                            </div>
                        </div>
                        <div class="right-inner-addon ">
                        <i class="glyphicon glyphicon-log-in"></i>
                        <input class="btn btn-sm btn-primary btn-block"  ng-disabled="LoginForm1.$invalid" ng-enabled="!LoginForm1.$invalid" type="submit" value="${message(code: 'security.signin.label', default: 'Sign in')}"  data-ng-click="login()"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<div data-ng-show="errors.showErrors" class="red">
	<div ng-repeat="error in errors.errorMessages">
		<strong></strong> <span ng-bind="error"></span>
	</div>
</div>

<div data-ng-controller="UserCtrl"  data-ng-hide="appConfig.token!=''">
<div class="container" >
    <div class="row">
        <div class="col-md-6 col-md-offset-2" >
            <div class="panel panel-default">
                <div class="panel-body">
                <g:set var="lang" value="${session.'org.springframework.web.servlet.i18n.SessionLocaleResolver.LOCALE' ?: org.springframework.web.servlet.support.RequestContextUtils.getLocale(request).toString().substring(0,2)}"/>			
   				<nav id="Navbar" class="navbar  navbar-inverse" role="navigation" >
				<ul class="nav navbar-nav">							
				<li class="dropdown controller">
   					<a class="dropdown-toggle" role="button" data-toggle="dropdown" data-target="#">
					${lang.toString()}
    				</a>
  	 				<ul class="dropdown-menu dropdown-menu-dark" role="menu" data-ng-controller="UserCtrl" data-ng-init="getAllLocales()" >
      					<li ng-repeat="c in locales" ng-bind-html-unsafe="c.value"><a class="fa fa-language icon-color" title="{{c.text}}" data-ng-model="lang" data-ng-click="setLang(c.value)">
          					<g:message code="language.{{c.text}}" default="{{c.text}}"/>
         				</a></li>
   					</ul>
				</li>
                <li class="controller">
					<div id="h2Header"><g:message code="default.welcome.title" args="[meta(name:'app.name')]"/> </div>
				</li>
				</ul>
				</nav>
                    <h5 class="text-center">
                    <a class="btn btn-sm btn-primary btn-block" onclick="window.location.href = '#/login'" title="${message(code: 'security.signin.label', default: 'Sign in')}"><span class="glyphicon glyphicon-log-in"></span> <g:message code="security.signin.label"  default="Sign in"/></a>
                    </h5>
                    <form name="signUpForm1"  class="form form-signup" role="form" novalidate>
 	
 		 			<div class="form-group">
                     <div class="input-group">
                    	<span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                      	<input type="text" name="username" data-ng-model="user.username" class="form-control" ng-minlength="4" ng-maxlength="40" placeholder="${message(code: 'security.username.label', default: 'Username')}" required="required"  autocomplete="off" unique-username />
						<div class="error" ng-show="signUpForm1.username.$dirty && signUpForm1.username.$invalid">
   							<small class="error" ng-show="signUpForm1.username.$invalid"><g:message code="default.invalid.label" args="['username']" default=" Invalid Username : "/></small>
							<small class="error" ng-show="signUpForm1.username.$error.minlength"><g:message code="default.minlength.label" args="['username']" default=" Username too short "/></small>
							<small class="error" ng-show="signUpForm1.username.$error.maxlength"><g:message code="default.maxlength.label" args="['username']" default=" Username too long "/></small>
							<small class="error" ng-show="signUpForm1.username.$error.uniquser"><g:message code="default.unique.label" args="['username']" default=" Username already taken "/></small>
						</div>

                	</div>
                    </div>
 	

	                <div class="form-group">
	          		<div class="input-group">
                     	<span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                        <input type="text" name="preventAutoPass" id="preventAutoPass" style="display:none" />
                        <input type="password" name="password" data-ng-model="user.passwordHash"   ng-pattern="/^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W]).*$/"  ng-maxlength="10" class="form-control" ng-minlength="4" placeholder="${message(code: 'security.password.label', default: 'Password')}" autocomplete="off" required="required"/>
						 <div class="error" ng-show="signUpForm1.password.$dirty && signUpForm1.password.$invalid">
						 	<small class="error" ng-show="!signUpForm1.password.$pristine && signUpForm1.password.$invalid"><g:message code="default.invalid.label" args="['password']" default=" Invalid password : "/></small>
							<small class="error" ng-show="signUpForm1.password.$error.minlength"><g:message code="default.minlength.label" args="['password']" default=" Password too short "/></small>
							<small class="error" ng-show="signUpForm1.password.$error.maxlength"><g:message code="default.maxlength.label" args="['password']" default=" Password too long "/></small>
							<small  class="error" ng-show="signUpForm1.password.$error.pattern"><g:message code="default.password.pattern.label" args="['password']" default=" password must be 8 characters, at least 1 uppercase character and 1 digit or special character."/></small>
								
						</div>
                    </div>
			  		</div>
			  		
                    <div class="form-group">
                     <div class="input-group">
                        <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                        <input type="text" name="preventAutoPass" id="preventAutoPass" style="display:none" />
                        <input type="password" name="passwordConfirm" data-ng-model="user.passwordConfirm"   password-match="user.passwordHash" class="form-control"  ng-maxlength="10" placeholder="${message(code: 'security.password.confirm.label', default: 'Confirm Password')}" autocomplete="off" required="required"/>
                         <div class="error" ng-show="signUpForm1.passwordConfirm.$dirty && signUpForm1.passwordConfirm.$invalid">
                        	<small class="error" ng-show="!signUpForm1.passwordConfirm.$pristine && signUpForm1.passwordConfirm.$invalid"><g:message code="default.invalid.label" args="['passwordConfirm']" default=" Invalid confirmation : "/></small>
							<small class="error" ng-show="signUpForm1.passwordConfirm.$error.maxlength" ><g:message code="default.maxlength.label" args="['passwordConfirm']" default=" Confirmation too long "/></small>
							<small class="error" ng-show="signUpForm1.passwordConfirm.$error.unique" ><g:message code="default.password.unique.label" args="['password']" default=" Confirmation does not match Password "/></small>	
						</div>
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
</div>

			<div class="container row" data-ng-controller="UserCtrl" data-ng-show="appConfig.token!=''">
                   <div class="col-md-12">
                    <p></p>
                    <ul class="nav navbar-nav col-md-12" style="min-height: 30px;">
						<li class='controller'>
							<a class="dropdown-toggle" role="button" data-toggle="dropdown" data-target="#" href="#" id="userBox">
							<i class="icon-user icon-white"></i>
							<span id="userMessage">
								<span class="glyphicon glyphicon-user"></span>
								<g:message code="default.user.label" default="{{user.username}}" />
							</span>
					 		<b class="caret"></b>
							</a>
							<ul class="dropdown-menu" role="menu"  id="authBox">
							<li></li>
							</ul>
							</li>
							<g:each var="c" in="${grailsApplication.controllerClasses.sort { it.fullName } }">
                             	<g:if test="${!(c.fullName.contains('DbdocController')||c.fullName.contains('ArrestedUser')||c.fullName.contains('ArrestedController')||c.fullName.contains('AuthController'))}">
                                    <li class="controller">
                                        <a onclick='window.location.href="#/${c.logicalPropertyName}/list"' title="${message(code: 'security.'+c.name+'.label', default: ''+c.name+'')}">
											<g:message code="defaultc.${c.name}.label"  default="${c.name}"/>	
                                        </a>
                                    </li>
                                </g:if>
                            </g:each>
					 		<li class='controller'>
								<a data-ng-controller='UserCtrl' data-ng-click='logout()' title="${message(code: 'security.signoff.label', default: 'Log out')}">
								<span class="glyphicon glyphicon-log-out"></span> <g:message code="security.signoff.label" default="Sign Off"/>
							</a>
							</li>
						</ul>
					</div>
				</div>


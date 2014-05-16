
		<nav id="Navbar" class="navbar navbar-fixed-top navbar-inverse" role="navigation" data-ng-show="appConfig.token!=''">
		<div class="container-fluid" data-ng-controller="UserCtrl" >
	
	    <div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
        		<span class="sr-only">Toggle navigation</span>
        		<span class="icon-bar"></span>
	           	<span class="icon-bar"></span>
	           	<span class="icon-bar"></span>
			</button>
			<div class="define-spinner">
				<div ng-show="loading"><i class="fa fa-spinner fa-2x fa-spin fa-inverse"></i></div>
			</div>
			<a class="homeLogo" href="#/"><i class="fa fa-home fa-2x icon-color fa-inverse"></i></a>
		</div>
		<div class="collapse navbar-collapse navbar-ex1-collapse" role="navigation">
    	<ul class="nav navbar-nav">
			<g:each var="c" in="${grailsApplication.controllerClasses.sort { it.fullName } }">
            	<g:if test="${!(c.fullName.contains('DbdocController')||c.fullName.contains('ArrestedUser')||c.fullName.contains('ArrestedController')||c.fullName.contains('AuthController'))}">
                	<li class="controller">
                    	<a onclick='window.location.href="#/${c.logicalPropertyName}/list"' title="${message(code: 'default.'+c.name+'.update', default: ''+c.name+'')}">
							<g:message code="default.${c.name}.label"  default="${c.name}"/>
                        </a>
                     </li>
                  </g:if>
              </g:each>
         </ul>


         <ul  class="nav navbar-nav navbar-right" >
         	<li  class="dropdown">
				<a class="dropdown-toggle" role="button" data-toggle="dropdown">
					<span id="userMessage">
						<span class="glyphicon glyphicon-user"></span>
							<g:message code="default.user.label" default="{{user.username}}" />
						</span>
					 	<b class="caret"></b>
				</a>
				<ul class="dropdown-menu" role="menu">
					<li ><i class="fa fa-gear icon-color"></i>
						<a onclick='window.location.href="#/updateinfo"' title="${message(code: 'default.userdetails.update', default: 'Update info')}">
							<g:message code="default.userdetails.update"  default="Update info"/>	
                        </a>
					</li>
				</ul>
			</li>
			<li>
				<a data-ng-controller='UserCtrl' data-ng-click='logout()' title="${message(code: 'security.signoff.label', default: 'Log out')}">
					<span class="glyphicon glyphicon-log-out"></span> <g:message code="security.signoff.label" default="Sign Off"/>
				</a>
			</li>
			
		</ul>
		</div>
	</div>
</nav>


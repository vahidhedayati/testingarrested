<div class="container row" data-ng-controller="UserCtrl" data-ng-show="appConfig.token!=''">
    <div class="col-md-12">
        <p></p>
        <ul class="nav navbar-nav col-md-12" style="min-height: 30px;">
            <g:each var="c" in="${grailsApplication.controllerClasses.sort { it.fullName } }">
                <g:if test="${!(c.fullName.contains('DbdocController')||c.fullName.contains('ArrestedUser')||c.fullName.contains('ArrestedController')||c.fullName.contains('AuthController'))}">
                    <li class="controller">
                        <a onclick='window.location.href="#/${c.logicalPropertyName}/list"'>
                            ${c.name}
                        </a>
                    </li>
                </g:if>
            </g:each>
        </ul>

    </div>
</div>


<div data-ng-controller="AuthorsCtrl" data-ng-init="getAllAuthors()">
    <h1>Authors List</h1>
 	<div data-ng-show="errors.showErrors" class="red">
	<div ng-repeat="error in errors.errorMessages">
		<strong></strong> <span ng-bind="error"></span>
	</div>
	</div>
        <div>
            <p></p>
            <a class="btn btn-primary btn-primary" data-ng-click="newAuthors()"><span class="glyphicon glyphicon-plus"></span> New authors</a>
            <p></p>
        </div>
        <div>
            <div>
                <div>
                    

                    <table class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            
                            <th data-sortable="emailAddress">Email Address</th>
                            
                            <th data-sortable="firstName">First Name</th>
                            
                            <th data-sortable="surName">Sur Name</th>
                            
                            <th><g:message code="default.actions.label"  default="Actions"/></th>
                        </tr>
                        </thead>
                        <tbody class="table table-hover">
                        <tr data-ng-repeat="instance in authorss" class="table table-hover">
                            
                            <td>{{instance.emailAddress}}</td>
                            
                            <td>{{instance.firstName}}</td>
                            
                            <td>{{instance.surName}}</td>
                            
                            <td>
                            <a class="btn btn-primary btn-danger" data-ng-show="authors.id"  title="${message(code: 'default.delete.label',args:['Authors'], default: 'Delete')}" data-ng-click="confirmDeleteAuthors()"><span class="glyphicon glyphicon-trash"></span> <g:message code="default.delete.label" args="['Authors']" default="Delete"/></a>
                            <a class="btn btn-primary btn-warn" data-ng-show="authors.id"  title="${message(code: 'default.update.label',args:['Authors'], default: 'Update')}" data-ng-click="editAuthors(instance)"><span class="glyphicon glyphicon-trash"></span> <g:message code="default.update.label" args="['Authors']" default="Update"/></a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
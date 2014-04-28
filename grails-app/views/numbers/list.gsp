
<div data-ng-controller="NumbersCtrl" data-ng-init="getAllNumbers()">
    <h1>Numbers List</h1>
 	<div data-ng-show="errors.showErrors" class="red">
	<div ng-repeat="error in errors.errorMessages">
		<strong></strong> <span ng-bind="error"></span>
	</div>
	</div>
        <div>
            <p></p>
            <a class="btn btn-primary btn-primary" data-ng-click="newNumbers()"><span class="glyphicon glyphicon-plus"></span> New numbers</a>
            <p></p>
        </div>
        <div>
            <div>
                <div>
                    

                    <table class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            
                            <th data-sortable="firstNumber">First Number</th>
                            
                            <th><g:message code="default.actions.label"  default="Actions"/></th>
                        </tr>
                        </thead>
                        <tbody class="table table-hover">
                        <tr data-ng-repeat="instance in numberss" class="table table-hover">
                            
                            <td>{{instance.firstNumber}}</td>
                            
                            <td>
                            <a class="btn btn-primary btn-danger" data-ng-show="numbers.id"  title="${message(code: 'default.delete.label',args:['Numbers'], default: 'Delete')}" data-ng-click="confirmDeleteNumbers()"><span class="glyphicon glyphicon-trash"></span> <g:message code="default.delete.label" args="['Numbers']" default="Delete"/></a>
                            <a class="btn btn-primary btn-warn" data-ng-show="numbers.id"  title="${message(code: 'default.update.label',args:['Numbers'], default: 'Update')}" data-ng-click="editNumbers(instance)"><span class="glyphicon glyphicon-trash"></span> <g:message code="default.update.label" args="['Numbers']" default="Update"/></a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
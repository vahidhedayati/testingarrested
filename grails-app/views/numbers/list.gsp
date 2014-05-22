
<div data-ng-controller="NumbersCtrl" data-ng-init="getAllNumbers()">
    <h1>Numbers List</h1>
 	<div data-ng-show="errors.showErrors" class="red">
		<div ng-repeat="error in errors.errorMessages">
			<strong></strong> <span ng-bind="error"></span>
		</div>
	</div>
	   
	
        <div>
            <p></p>
             <input type="search" placeholder="${message(code:'default.filter.label', default:'Filter results')}" ng-model="search"/>
             <a class="btn btn-primary btn-primary" data-ng-click="newNumbers()"><span class="glyphicon glyphicon-plus"></span><g:message code="default.new.label" args="['numbers']" default="New numbers"/></a>
            <p></p>
        </div>
        <div>
            <div>
                <div>
                    
					
					
                    <table class="table table-condensed table-striped table-responsive table-hover">
                        <thead>
                        <tr>
                            
                            <th data-sortable="firstNumber">First Number</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        <tr data-ng-repeat="instance in (numberss|orderBy:'id':true|filter:search)" data-ng-click="editNumbers(instance)">
                            
                            <td>{{instance.firstNumber}}</td>
                            
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
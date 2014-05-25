
<div data-ng-controller="NumbersCtrl" >
    <h1>Numbers List</h1>
 	<div data-ng-show="errors.showErrors" class="red">
		<div ng-repeat="error in errors.errorMessages">
			<strong></strong> <span ng-bind="error"></span>
		</div>
	</div>
	   
	
        <div>
            <p></p>
             <a class="btn btn-primary btn-primary" data-ng-click="newNumbers()"><span class="glyphicon glyphicon-plus"></span><g:message code="default.new.label" args="['numbers']" default="New numbers"/></a>
            <p></p>
        </div>
        <div>
            <div>
                <div>
                    
					<button ng-click="tableParams.reload()" class="btn btn-default">Reload</button>
    				<button ng-click="tableParams.sorting({})" class="btn btn-default">Clear sorting</button> 
					<div loading-container="tableParams.settings().$loading">
                    <table class="table"  ng-table="tableParams" show-filter="true">
                     
                        <tr  data-ng-repeat="instance in numberss"   data-ng-click="editNumbers(instance)">
                        	
                            
                            	
                             		<td data-sortable="'firstNumber'" filter="{ 'firstNumber': 'text' }"  data-title="'firstNumber'"  >
                            	
                            	{{instance.firstNumber}}
                            </td>
                            
                        </tr>
                      
                    </table>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>
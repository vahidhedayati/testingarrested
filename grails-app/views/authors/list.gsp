
<div data-ng-controller="AuthorsCtrl" >
    <h1>Authors List</h1>
 	<div data-ng-show="errors.showErrors" class="red">
		<div ng-repeat="error in errors.errorMessages">
			<strong></strong> <span ng-bind="error"></span>
		</div>
	</div>
	   
	
        <div>
            <p></p>
             <a class="btn btn-primary btn-primary" data-ng-click="newAuthors()"><span class="glyphicon glyphicon-plus"></span><g:message code="default.new.label" args="['authors']" default="New authors"/></a>
            <p></p>
        </div>
        <div>
            <div>
                <div>
                    
					<button ng-click="tableParams.reload()" class="btn btn-default">Reload</button>
    				<button ng-click="tableParams.sorting({})" class="btn btn-default">Clear sorting</button> 
					<div loading-container="tableParams.settings().$loading">
                    <table class="table"  ng-table="tableParams" show-filter="true">
                     
                        <tr  data-ng-repeat="instance in authorss"   data-ng-click="editAuthors(instance)">
                        	
                            
                            	
                             		<td data-sortable="'emailAddress'" filter="{'emailAddress':'text'}"  data-title="'emailAddress'"  >
                            	
                            	{{instance.emailAddress}}
                            </td>
                            
                            	
                            		<td data-sortable="'firstName'"  data-title="'firstName'"  >
                            	
                            	{{instance.firstName}}
                            </td>
                            
                            	
                            		<td data-sortable="'surName'"  data-title="'surName'"  >
                            	
                            	{{instance.surName}}
                            </td>
                            
                        </tr>
                      
                    </table>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>
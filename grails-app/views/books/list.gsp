
<div data-ng-controller="BooksCtrl" data-ng-init="getAllBooks()">
    <h1>Books List</h1>
 	<div data-ng-show="errors.showErrors" class="red">
		<div ng-repeat="error in errors.errorMessages">
			<strong></strong> <span ng-bind="error"></span>
		</div>
	</div>
	   
	
        <div>
            <p></p>
             <a class="btn btn-primary btn-primary" data-ng-click="newBooks()"><span class="glyphicon glyphicon-plus"></span><g:message code="default.new.label" args="['books']" default="New books"/></a>
            <p></p>
        </div>
        <div>
            <div>
                <div>
                    
					<button ng-click="tableParams.reload()" class="btn btn-default">Reload</button>
    				<button ng-click="tableParams.sorting({})" class="btn btn-default">Clear sorting</button> 
					<div loading-container="tableParams.settings().$loading">
                    <table class="table"  ng-table="tableParams" show-filter="true">
                     
                        <tr  data-ng-repeat="instance in bookss"   data-ng-click="editBooks(instance)">
                        	
                            
                            	
                             		<td data-sortable="'author'" filter="{ 'author': 'text' }"  data-title="'author'"  >
                            	
                            	{{instance.author}}
                            </td>
                            
                            	
                            		<td data-sortable="'content'"  data-title="'content'"  >
                            	
                            	{{instance.content}}
                            </td>
                            
                            	
                            		<td data-sortable="'displayOnMenu'"  data-title="'displayOnMenu'"  >
                            	
                            	{{instance.displayOnMenu}}
                            </td>
                            
                            	
                            		<td data-sortable="'name'"  data-title="'name'"  >
                            	
                            	{{instance.name}}
                            </td>
                            
                            	
                            		<td data-sortable="'orderby'"  data-title="'orderby'"  >
                            	
                            	{{instance.orderby}}
                            </td>
                            
                            	
                            		<td data-sortable="'pricerange'"  data-title="'pricerange'"  >
                            	
                            	{{instance.pricerange}}
                            </td>
                            
                        </tr>
                      
                    </table>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>

<div data-ng-controller="BooksCtrl" data-ng-init="getAllBooks()">
    <h1>Books List</h1>
 	<div data-ng-show="errors.showErrors" class="red">
		<div ng-repeat="error in errors.errorMessages">
			<strong></strong> <span ng-bind="error"></span>
		</div>
	</div>
	   
	
        <div>
            <p></p>
             <input type="search" placeholder="${message(code:'default.filter.label', default:'Filter results')}" ng-model="search"/>
             <a class="btn btn-primary btn-primary" data-ng-click="newBooks()"><span class="glyphicon glyphicon-plus"></span><g:message code="default.new.label" args="['books']" default="New books"/></a>
            <p></p>
        </div>
        <div>
            <div>
                <div>
                    
					
					
                    <table class="table table-condensed table-striped table-responsive table-hover">
                        <thead>
                        <tr>
                            
                            <th>Author</th>
                            
                            <th data-sortable="content">Content</th>
                            
                            <th data-sortable="displayOnMenu">Display On Menu</th>
                            
                            <th data-sortable="name">Name</th>
                            
                            <th data-sortable="orderby">Orderby</th>
                            
                            <th data-sortable="pricerange">Pricerange</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        <tr data-ng-repeat="instance in (bookss|orderBy:'id':true|filter:search)" data-ng-click="editBooks(instance)">
                            
                            <td>{{instance.author}}</td>
                            
                            <td>{{instance.content}}</td>
                            
                            <td>{{instance.displayOnMenu}}</td>
                            
                            <td>{{instance.name}}</td>
                            
                            <td>{{instance.orderby}}</td>
                            
                            <td>{{instance.pricerange}}</td>
                            
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<div data-ng-controller="BooksCtrl" data-ng-init="getAllBooks()">
    <h1>Books List</h1>
 	<div data-ng-show="errors.showErrors" class="red">
	<div ng-repeat="error in errors.errorMessages">
		<strong></strong> <span ng-bind="error"></span>
	</div>
	</div>
        <div>
            <p></p>
            <a class="btn btn-primary btn-primary" data-ng-click="newBooks()"><span class="glyphicon glyphicon-plus"></span> New books</a>
            <p></p>
        </div>
        <div>
            <div>
                <div>
                    

                    <table class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            
                            <th>Author</th>
                            
                            <th data-sortable="content">Content</th>
                            
                            <th data-sortable="displayOnMenu">Display On Menu</th>
                            
                            <th data-sortable="name">Name</th>
                            
                            <th data-sortable="orderby">Orderby</th>
                            
                            <th data-sortable="pricerange">Pricerange</th>
                            
                            <th><g:message code="default.actions.label"  default="Actions"/></th>
                        </tr>
                        </thead>
                        <tbody class="table table-hover">
                        <tr data-ng-repeat="instance in bookss" class="table table-hover">
                            
                            <td>{{instance.author}}</td>
                            
                            <td>{{instance.content}}</td>
                            
                            <td>{{instance.displayOnMenu}}</td>
                            
                            <td>{{instance.name}}</td>
                            
                            <td>{{instance.orderby}}</td>
                            
                            <td>{{instance.pricerange}}</td>
                            
                            <td>
                            <a class="btn btn-primary btn-danger" data-ng-show="books.id"  title="${message(code: 'default.delete.label',args:['Books'], default: 'Delete')}" data-ng-click="confirmDeleteBooks()"><span class="glyphicon glyphicon-trash"></span> <g:message code="default.delete.label" args="['Books']" default="Delete"/></a>
                            <a class="btn btn-primary btn-warn" data-ng-show="books.id"  title="${message(code: 'default.update.label',args:['Books'], default: 'Update')}" data-ng-click="editBooks(instance)"><span class="glyphicon glyphicon-trash"></span> <g:message code="default.update.label" args="['Books']" default="Update"/></a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
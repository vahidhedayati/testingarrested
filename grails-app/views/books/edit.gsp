

 	<div data-ng-show="errors.showErrors" class="red">
		<div ng-repeat="error in errors.errorMessages">
			<strong></strong> <span ng-bind="error"></span>
		</div>
	</div>
    

    <div class="container" data-ng-controller="BooksCtrl" >
        <div class="small-12 columns" >
            <div class="panel panel-default">
                <div class="panel-body">
                    
                     <h5 class="text-center">Books Edit</h5>
                    
                    

	
    <form name="booksForm"  novalidate>
    
    <div>
    <p></p>
        <a class="btn btn-primary btn-primary" data-ng-click="newBooks()"><span class="glyphicon glyphicon-plus"></span><g:message code="default.new.label" args="['books']" default="New books"/></a>
        <a class="btn btn-primary btn-primary" onclick="window.location.href = '#/books/list'"  title="${message(code: 'default.list.label',args:['Books'], default: 'List')}"><span class="glyphicon glyphicon-align-justify"></span> 	<g:message code="default.list.label" args="['Books']" default="List"/></a>
        <a class="btn btn-primary btn-success" data-ng-hide="books.id"  ng-disabled="booksForm.$invalid" title="${message(code: 'default.save.label',args:['Books'], default: 'Save')}" ng-enabled="!booksForm.$invalid" data-ng-click="manualSaveBooks()"><span class="glyphicon glyphicon-floppy-disk"></span> <g:message code="default.save.label" args="['Books']" default="Save"/></a>
        <a class="btn btn-primary btn-success" data-ng-show="books.id"  ng-disabled="booksForm.$invalid" title="${message(code: 'default.update.label',args:['Books'], default: 'Update')}" ng-enabled="!booksForm.$invalid" data-ng-click="manualSaveBooks()"><span class="glyphicon glyphicon-floppy-disk"></span> <g:message code="default.update.label" args="['Books']" default="Update"/></a>
        <a class="btn btn-primary btn-danger" data-ng-show="books.id"  title="${message(code: 'default.delete.label',args:['Books'], default: 'Delete')}" data-ng-click="confirmDeleteBooks()"><span class="glyphicon glyphicon-trash"></span> <g:message code="default.delete.label" args="['Books']" default="Delete"/></a>
        
   </p>
    </div>
    
    <div>
    
    
    <div>
        
        <div class="form-group">
            <label class="control-label" for="author">
                author
            </label>
            <select id="author" name="author.id" data-ng-model='books.author' data-ng-controller="AuthorsCtrl" data-ng-init="getAllAuthors()" ng-options="c.id for c in authorss track by c.id" required="" class="many-to-one"/>
        </div>
        
        <div class="form-group">
            <label class="control-label" for="content">
                content
            </label>
            <div class="input-group"><input type="text" class="form-control" name="content" required="required" data-ng-model='books.content' />
		<div class="error" ng-show="booksForm.content.$dirty && booksForm.content.$invalid">
		<small class="error" ng-show="!booksForm.content.$pristine && booksForm.content.$invalid"><g:message code="default.invalid.label" args="['content']" default=" Invalid content : "/> </small></div></div>
        </div>
        
        <div class="form-group">
            <label class="control-label" for="displayOnMenu">
                displayOnMenu
            </label>
            <input type="checkbox"  name="displayOnMenu" data-ng-model='books.displayOnMenu' />
        </div>
        
        <div class="form-group">
            <label class="control-label" for="name">
                name
            </label>
            <div class="input-group"><input type="text" class="form-control" name="name" ng-minlength="5" ng-maxlength="20" required="required" data-ng-model='books.name' />
		<div class="error" ng-show="booksForm.name.$dirty && booksForm.name.$invalid">
		<small class="error" ng-show="!booksForm.name.$pristine && booksForm.name.$invalid"><g:message code="default.invalid.label" args="['name']" default=" Invalid name : "/> <g:message code="default.minSize.label" args="['5']" default=" minSize: 5 "/>
<g:message code="default.maxSize.label" args="['20']" default=" maxSize: 20 "/>
</small>
		<small class="error" ng-show="booksForm.name.$error.minlength"><g:message code="default.short.label" args="['name']" default=" name too short "/></small>

		<small class="error" ng-show="booksForm.name.$error.maxlength"><g:message code="default.long.label" args="['name']" default=" name too long "/></small>
</div></div>
        </div>
        
        <div class="form-group">
            <label class="control-label" for="orderby">
                orderby
            </label>
            <div class="input-group"><input class="form-control" name="orderby" type="number" data-ng-model='books.orderby'  required="required"/>
		<div class="error" ng-show="booksForm.orderby.$dirty && booksForm.orderby.$invalid">
		<small class="error" ng-show="!booksForm.orderby.$pristine && booksForm.orderby.$invalid"><g:message code="default.invalid.label" args="['orderby']" default=" Invalid orderby : "/> </small>
		<small class="error" ng-show="booksForm.orderby.$error.number"><g:message code="default.invalid.number.label" args="['orderby']" default=" Invalid orderby "/></small></div></div>
        </div>
        
        <div class="form-group">
            <label class="control-label" for="pricerange">
                pricerange
            </label>
            <div class="input-group"><input class="form-control" name="pricerange" type="number" min="4" max="10" data-ng-model='books.pricerange'  required="required"/>
		<div class="error" ng-show="booksForm.pricerange.$dirty && booksForm.pricerange.$invalid">
		<small class="error" ng-show="!booksForm.pricerange.$pristine && booksForm.pricerange.$invalid"><g:message code="default.invalid.label" args="['pricerange']" default=" Invalid pricerange : "/> <g:message code="default.min.label" args="['4']" default=" min: 4 "/><g:message code="default.max.label" args="['10']" default=" max: 10 "/></small>
		<small class="error" ng-show="booksForm.pricerange.$error.number"><g:message code="default.invalid.number.label" args="['pricerange']" default=" Invalid pricerange "/></small></div></div>
        </div>
        
        
    </div>
    </div>
    </form>
    </div>
</div>
</div>
</div>

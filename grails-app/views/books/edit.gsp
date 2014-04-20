
<div data-ng-controller="BooksCtrl">
    <h1>Books Edit</h1>
    <div data-ng-show="errors.showErrors" class="red">
        <p data-ng-show="errors.showServerError">"Can not connect to the server, try later"</p>
    </div>
     <form name="booksForm"  novalidate>
    <div>
    <div>
    <div>
    <div>
   
        <p></p>
        
        <a class="btn btn-primary btn-primary" onclick="window.location.href = '#/books/list'"  title="${message(code: 'default.list.label',args:['Books'], default: 'List')}"><span class="glyphicon glyphicon-align-justify"></span> 	<g:message code="default.list.label" args="['Books']" default="List"/></a>
  
        <a class="btn btn-primary btn-success" data-ng-hide="books.id"  ng-disabled="booksForm.$invalid" title="${message(code: 'default.save.label',args:['Books'], default: 'Save')}" ng-enabled="!booksForm.$invalid" data-ng-click="manualSaveBooks()"><span class="glyphicon glyphicon-floppy-disk"></span> <g:message code="default.save.label" args="['Books']" default="Save"/></a>
        <a class="btn btn-primary btn-success" data-ng-show="books.id"  ng-disabled="booksForm.$invalid" title="${message(code: 'default.update.label',args:['Books'], default: 'Update')}" ng-enabled="!booksForm.$invalid" data-ng-click="manualSaveBooks()"><span class="glyphicon glyphicon-floppy-disk"></span> <g:message code="default.update.label" args="['Books']" default="Update"/></a>
        <a class="btn btn-primary btn-danger" data-ng-show="books.id"  title="${message(code: 'default.delete.label',args:['Books'], default: 'Delete')}" data-ng-click="confirmDeleteBooks()"><span class="glyphicon glyphicon-trash"></span> <g:message code="default.update.label" args="['Books']" default="Delete"/></a>
        <p></p>
    </div>
    <div>
    <div>
    <div>
    
    
    <div>
        
        <div class="fieldcontain">
            <label for="author">
                author
            </label>
            <select id="author" name="author.id" data-ng-model='books.author' data-ng-controller="AuthorsCtrl" data-ng-init="getAllAuthors()" ng-options="c.id for c in authorss track by c.id" required="" class="many-to-one"/>
        </div>
        
        <div class="fieldcontain">
            <label for="content">
                content
            </label>
            <input type="text" name="content" required="" data-ng-model='books.content' />
		<p ng-show="booksForm.content.$error.required" class="help-block"><g:message code="default.required.label" args="['content']" default="Required"/></p>

		<p ng-show="!booksForm.content.$pristine && booksForm.content.$invalid" class="help-block"><g:message code="default.invalid.label" args="['content']" default="Invalid content"/> </p>
        </div>
        
        <div class="fieldcontain">
            <label for="displayOnMenu">
                displayOnMenu
            </label>
            <input type="checkbox"  name="displayOnMenu" data-ng-model='books.displayOnMenu' />
        </div>
        
        <div class="fieldcontain">
            <label for="name">
                name
            </label>
            <input type="text" name="name" ng-minlength="5" ng-maxlength="20" required="" data-ng-model='books.name' />
		<p ng-show="booksForm.name.$error.required" class="help-block"><g:message code="default.required.label" args="['name']" default="Required"/></p>

		<p ng-show="!booksForm.name.$pristine && booksForm.name.$invalid" class="help-block"><g:message code="default.invalid.label" args="['name']" default="Invalid name"/> <g:message code="default.minSize.label" args="['5']" default=" minSize: 5 "/>
<g:message code="default.maxSize.label" args="['20']" default=" maxSize: 20 "/>
</p>
		<p ng-show="booksForm.name.$error.minlength" class="help-block"><g:message code="default.short.label" args="['name']" default="name too short"/></p>

		<p ng-show="booksForm.name.$error.maxlength" class="help-block"><g:message code="default.long.label" args="['name']" default="name too long"/></p>

        </div>
        
        <div class="fieldcontain">
            <label for="orderby">
                orderby
            </label>
            <input name="orderby" type="number" data-ng-model='books.orderby'  required=""/>
		<p ng-show="booksForm.orderby.$error.required" class="help-block"><g:message code="default.required.label" args="['orderby']" default="Required"/></p>
		<p ng-show="!booksForm.orderby.$pristine && booksForm.orderby.$invalid" class="help-block">invalid orderby </p>
		<p ng-show="booksForm.orderby.$error.number" class="help-block"><g:message code="default.invalid.label" args="['orderby']" default="Invalid orderby"/></p>
        </div>
        
        <div class="fieldcontain">
            <label for="pricerange">
                pricerange
            </label>
            <input name="pricerange" type="number" min="4" max="10" data-ng-model='books.pricerange'  required=""/>
		<p ng-show="booksForm.pricerange.$error.required" class="help-block"><g:message code="default.required.label" args="['pricerange']" default="Required"/></p>
		<p ng-show="!booksForm.pricerange.$pristine && booksForm.pricerange.$invalid" class="help-block">invalid pricerange <g:message code="default.min.label" args="['4']" default=" min: 4 "/><g:message code="default.max.label" args="['10']" default=" max: 10 "/></p>
		<p ng-show="booksForm.pricerange.$error.number" class="help-block"><g:message code="default.invalid.label" args="['pricerange']" default="Invalid pricerange"/></p>
        </div>
        
        
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </form>
</div>


 	<div data-ng-show="errors.showErrors" class="red">
		<div ng-repeat="error in errors.errorMessages">
			<strong></strong> <span ng-bind="error"></span>
		</div>
	</div>
    

    <div class="container" data-ng-controller="AuthorsCtrl" >
        <div class="small-12 columns" >
            <div class="panel panel-default">
                <div class="panel-body">
                    
                     <h5 class="text-center">Authors Edit</h5>
                    
                    

	
    <form name="authorsForm"  novalidate>
    
    <div>
    <p></p>
        <a class="btn btn-primary btn-primary" data-ng-click="newAuthors()"><span class="glyphicon glyphicon-plus"></span><g:message code="default.new.label" args="['authors','BB']" default="New authors"/></a>
        <a class="btn btn-primary btn-primary" onclick="window.location.href = '#/authors/list'"  title="${message(code: 'default.list.label',args:['Authors'], default: 'List')}"><span class="glyphicon glyphicon-align-justify"></span> 	<g:message code="default.list.label" args="['Authors']" default="List"/></a>
        <a class="btn btn-primary btn-success" data-ng-hide="authors.id"  ng-disabled="authorsForm.$invalid" title="${message(code: 'default.save.label',args:['Authors'], default: 'Save')}" ng-enabled="!authorsForm.$invalid" data-ng-click="manualSaveAuthors()"><span class="glyphicon glyphicon-floppy-disk"></span> <g:message code="default.save.label" args="['Authors']" default="Save"/></a>
        <a class="btn btn-primary btn-success" data-ng-show="authors.id"  ng-disabled="authorsForm.$invalid" title="${message(code: 'default.update.label',args:['Authors'], default: 'Update')}" ng-enabled="!authorsForm.$invalid" data-ng-click="manualSaveAuthors()"><span class="glyphicon glyphicon-floppy-disk"></span> <g:message code="default.update.label" args="['Authors']" default="Update"/></a>
        <a class="btn btn-primary btn-danger" data-ng-show="authors.id"  title="${message(code: 'default.delete.label',args:['Authors'], default: 'Delete')}" data-ng-click="confirmDeleteAuthors()"><span class="glyphicon glyphicon-trash"></span> <g:message code="default.delete.label" args="['Authors']" default="Delete"/></a>
        
   </p>
    </div>
    
    <div>
    
    
    <div>
        
        <div class="form-group">
            <label class="control-label" for="emailAddress">
                emailAddress 
            </label>
            <div class="input-group"><input type="email" class="form-control" name="emailAddress" required="required" data-ng-model='authors.emailAddress' />
		<div class="error" ng-show="authorsForm.emailAddress.$dirty && authorsForm.emailAddress.$invalid">
		<small class="error" ng-show="!authorsForm.emailAddress.$pristine && authorsForm.emailAddress.$invalid"><g:message code="default.invalid.label" args="['emailAddress']" default=" Invalid emailAddress : "/> </small></div></div>
        </div>
        
        <div class="form-group">
            <label class="control-label" for="firstName">
                firstName 
            </label>
            <div class="input-group"><input type="text" class="form-control" name="firstName" required="required" data-ng-model='authors.firstName' />
		<div class="error" ng-show="authorsForm.firstName.$dirty && authorsForm.firstName.$invalid">
		<small class="error" ng-show="!authorsForm.firstName.$pristine && authorsForm.firstName.$invalid"><g:message code="default.invalid.label" args="['firstName']" default=" Invalid firstName : "/> </small></div></div>
        </div>
        
        <div class="form-group">
            <label class="control-label" for="surName">
                surName 
            </label>
            <div class="input-group"><input type="text" class="form-control" name="surName" required="required" data-ng-model='authors.surName' />
		<div class="error" ng-show="authorsForm.surName.$dirty && authorsForm.surName.$invalid">
		<small class="error" ng-show="!authorsForm.surName.$pristine && authorsForm.surName.$invalid"><g:message code="default.invalid.label" args="['surName']" default=" Invalid surName : "/> </small></div></div>
        </div>
        
        
    </div>
    </div>
    </form>
    </div>
</div>
</div>
</div>


<div data-ng-controller="AuthorsCtrl">
    <h1>Authors Edit</h1>
    <div data-ng-show="errors.showErrors" class="red">
        <p data-ng-show="errors.showServerError">"Can not connect to the server, try later"</p>
    </div>
     <form name="authorsForm"  novalidate>
    <div>
    <div>
    <div>
    <div>
   
        <p></p>
        
        <a class="btn btn-primary btn-primary" onclick="window.location.href = '#/authors/list'"  title="${message(code: 'default.list.label',args:['Authors'], default: 'List')}"><span class="glyphicon glyphicon-align-justify"></span> 	<g:message code="default.list.label" args="['Authors']" default="List"/></a>
  
        <a class="btn btn-primary btn-success" data-ng-hide="authors.id"  ng-disabled="authorsForm.$invalid" title="${message(code: 'default.save.label',args:['Authors'], default: 'Save')}" ng-enabled="!authorsForm.$invalid" data-ng-click="manualSaveAuthors()"><span class="glyphicon glyphicon-floppy-disk"></span> <g:message code="default.save.label" args="['Authors']" default="Save"/></a>
        <a class="btn btn-primary btn-success" data-ng-show="authors.id"  ng-disabled="authorsForm.$invalid" title="${message(code: 'default.update.label',args:['Authors'], default: 'Update')}" ng-enabled="!authorsForm.$invalid" data-ng-click="manualSaveAuthors()"><span class="glyphicon glyphicon-floppy-disk"></span> <g:message code="default.update.label" args="['Authors']" default="Update"/></a>
        <a class="btn btn-primary btn-danger" data-ng-show="authors.id"  title="${message(code: 'default.delete.label',args:['Authors'], default: 'Delete')}" data-ng-click="confirmDeleteAuthors()"><span class="glyphicon glyphicon-trash"></span> <g:message code="default.update.label" args="['Authors']" default="Delete"/></a>
        <p></p>
    </div>
    <div>
    <div>
    <div>
    
    
    <div>
        
        <div class="fieldcontain">
            <label for="emailAddress">
                emailAddress
            </label>
            <input type="email" name="emailAddress" required="" data-ng-model='authors.emailAddress' />
		<p ng-show="authorsForm.emailAddress.$error.required" class="help-block"><g:message code="default.required.label" args="['emailAddress']" default="Required"/></p>

		<p ng-show="!authorsForm.emailAddress.$pristine && authorsForm.emailAddress.$invalid" class="help-block"><g:message code="default.invalid.label" args="['emailAddress']" default="Invalid emailAddress"/>
</p>
        </div>
        
        <div class="fieldcontain">
            <label for="firstName">
                firstName
            </label>
            <input type="text" name="firstName" required="" data-ng-model='authors.firstName' />
		<p ng-show="authorsForm.firstName.$error.required" class="help-block"><g:message code="default.required.label" args="['firstName']" default="Required"/></p>

		<p ng-show="!authorsForm.firstName.$pristine && authorsForm.firstName.$invalid" class="help-block"><g:message code="default.invalid.label" args="['firstName']" default="Invalid firstName"/>
</p>
        </div>
        
        <div class="fieldcontain">
            <label for="surName">
                surName
            </label>
            <input type="text" name="surName" required="" data-ng-model='authors.surName' />
		<p ng-show="authorsForm.surName.$error.required" class="help-block"><g:message code="default.required.label" args="['surName']" default="Required"/></p>

		<p ng-show="!authorsForm.surName.$pristine && authorsForm.surName.$invalid" class="help-block"><g:message code="default.invalid.label" args="['surName']" default="Invalid surName"/>
</p>
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
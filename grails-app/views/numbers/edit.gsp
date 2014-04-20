
<div data-ng-controller="NumbersCtrl">
    <h1>Numbers Edit</h1>
    <div data-ng-show="errors.showErrors" class="red">
        <p data-ng-show="errors.showServerError">"Can not connect to the server, try later"</p>
    </div>
     <form name="numbersForm"  novalidate>
    <div>
    <div>
    <div>
    <div>
   
        <p></p>
        
        <a class="btn btn-primary btn-primary" onclick="window.location.href = '#/numbers/list'"  title="${message(code: 'default.list.label',args:['Numbers'], default: 'List')}"><span class="glyphicon glyphicon-align-justify"></span> 	<g:message code="default.list.label" args="['Numbers']" default="List"/></a>
  
        <a class="btn btn-primary btn-success" data-ng-hide="numbers.id"  ng-disabled="numbersForm.$invalid" title="${message(code: 'default.save.label',args:['Numbers'], default: 'Save')}" ng-enabled="!numbersForm.$invalid" data-ng-click="manualSaveNumbers()"><span class="glyphicon glyphicon-floppy-disk"></span> <g:message code="default.save.label" args="['Numbers']" default="Save"/></a>
        <a class="btn btn-primary btn-success" data-ng-show="numbers.id"  ng-disabled="numbersForm.$invalid" title="${message(code: 'default.update.label',args:['Numbers'], default: 'Update')}" ng-enabled="!numbersForm.$invalid" data-ng-click="manualSaveNumbers()"><span class="glyphicon glyphicon-floppy-disk"></span> <g:message code="default.update.label" args="['Numbers']" default="Update"/></a>
        <a class="btn btn-primary btn-danger" data-ng-show="numbers.id"  title="${message(code: 'default.delete.label',args:['Numbers'], default: 'Delete')}" data-ng-click="confirmDeleteNumbers()"><span class="glyphicon glyphicon-trash"></span> <g:message code="default.update.label" args="['Numbers']" default="Delete"/></a>
        <p></p>
    </div>
    <div>
    <div>
    <div>
    
    
    <div>
        
        <div class="fieldcontain">
            <label for="firstNumber">
                firstNumber
            </label>
            <input name="firstNumber" type="number" min="4" max="10" data-ng-model='numbers.firstNumber'  required=""/>
		<p ng-show="numbersForm.firstNumber.$error.required" class="help-block"><g:message code="default.required.label" args="['firstNumber']" default="Required"/></p>
		<p ng-show="!numbersForm.firstNumber.$pristine && numbersForm.firstNumber.$invalid" class="help-block">invalid firstNumber<g:message code="default.min.label" args="['4']" default="min: 4 "/><g:message code="default.max.label" args="['10']" default="min: 10 "/></p>
		<p ng-show="numbersForm.firstNumber.$error.number" class="help-block"><g:message code="default.invalid.label" args="['firstNumber']" default="Invalid firstNumber"/></p>
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


 	<div data-ng-show="errors.showErrors" class="red">
		<div ng-repeat="error in errors.errorMessages">
			<strong></strong> <span ng-bind="error"></span>
		</div>
	</div>
    
    <div class="container" data-ng-controller="NumbersCtrl" >
    <div class="row">
        <div class="col-md-6 col-md-offset-2" >
            <div class="panel panel-default">
                <div class="panel-body">
           
                     <h1 class="text-center">Numbers Edit</h1>
                    
                    
    

	
    <form name="numbersForm"  novalidate>
    
    <div>
    <p></p>
        <a class="btn btn-primary btn-primary" onclick="window.location.href = '#/numbers/list'"  title="${message(code: 'default.list.label',args:['Numbers'], default: 'List')}"><span class="glyphicon glyphicon-align-justify"></span> 	<g:message code="default.list.label" args="['Numbers']" default="List"/></a>
        <a class="btn btn-primary btn-success" data-ng-hide="numbers.id"  ng-disabled="numbersForm.$invalid" title="${message(code: 'default.save.label',args:['Numbers'], default: 'Save')}" ng-enabled="!numbersForm.$invalid" data-ng-click="manualSaveNumbers()"><span class="glyphicon glyphicon-floppy-disk"></span> <g:message code="default.save.label" args="['Numbers']" default="Save"/></a>
        <a class="btn btn-primary btn-success" data-ng-show="numbers.id"  ng-disabled="numbersForm.$invalid" title="${message(code: 'default.update.label',args:['Numbers'], default: 'Update')}" ng-enabled="!numbersForm.$invalid" data-ng-click="manualSaveNumbers()"><span class="glyphicon glyphicon-floppy-disk"></span> <g:message code="default.update.label" args="['Numbers']" default="Update"/></a>
        <a class="btn btn-primary btn-danger" data-ng-show="numbers.id"  title="${message(code: 'default.delete.label',args:['Numbers'], default: 'Delete')}" data-ng-click="confirmDeleteNumbers()"><span class="glyphicon glyphicon-trash"></span> <g:message code="default.delete.label" args="['Numbers']" default="Delete"/></a>
    <p></p>
    </div>
    
    <div>
    
    
    <div>
        
        <div class="form-group">
            <label class="control-label" for="firstNumber">
                firstNumber
            </label>
            <div  class="control-group" ng-class="{'has-error': numbersForm.firstNumber.$invalid && (numbersForm.firstNumber.$dirty || numbersForm.firstNumber.$pristine), 'has-success': !numbersForm.firstNumber.$invalid && numbersForm.firstNumber.$dirty && !numbersForm.firstNumber.$pristine}" ><div class="input-group"><input class="form-control" name="firstNumber" type="number" min="4" max="10" data-ng-model='numbers.firstNumber'  required="required"/>
		<span ng-show="!numbersForm.firstNumber.$pristine && numbersForm.firstNumber.$invalid" class="help-inline">invalid firstNumber <g:message code="default.min.label" args="['4']" default=" min: 4 "/><g:message code="default.max.label" args="['10']" default=" max: 10 "/></span>
		<span ng-show="numbersForm.firstNumber.$error.number" class="help-inline"><g:message code="default.invalid.number.label" args="['firstNumber']" default="Invalid firstNumber"/></span></div></div>
        </div>
        
        
    </div>
    </div>
    </form>
    </div>
</div>
</div></div></div>
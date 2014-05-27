

 	<div data-ng-show="errors.showErrors" class="red">
		<div ng-repeat="error in errors.errorMessages">
			<strong></strong> <span ng-bind="error"></span>
		</div>
	</div>
    

    <div class="container" data-ng-controller="NumbersCtrl" >
        <div class="small-12 columns" >
            <div class="panel panel-default">
                <div class="panel-body">
                    
                     <h5 class="text-center">Numbers Edit</h5>
                    
                    

	
    <form name="numbersForm"  novalidate>
    
    <div>
    <p></p>
        <a class="btn btn-primary btn-primary" data-ng-click="newNumbers()"><span class="glyphicon glyphicon-plus"></span><g:message code="default.new.label" args="['numbers']" default="New numbers"/></a>
        <a class="btn btn-primary btn-primary" onclick="window.location.href = '#/numbers/list'"  title="${message(code: 'default.list.label',args:['Numbers'], default: 'List')}"><span class="glyphicon glyphicon-align-justify"></span> 	<g:message code="default.list.label" args="['Numbers']" default="List"/></a>
        <a class="btn btn-primary btn-success" data-ng-hide="numbers.id"  ng-disabled="numbersForm.$invalid" title="${message(code: 'default.save.label',args:['Numbers'], default: 'Save')}" ng-enabled="!numbersForm.$invalid" data-ng-click="manualSaveNumbers()"><span class="glyphicon glyphicon-floppy-disk"></span> <g:message code="default.save.label" args="['Numbers']" default="Save"/></a>
        <a class="btn btn-primary btn-success" data-ng-show="numbers.id"  ng-disabled="numbersForm.$invalid" title="${message(code: 'default.update.label',args:['Numbers'], default: 'Update')}" ng-enabled="!numbersForm.$invalid" data-ng-click="manualSaveNumbers()"><span class="glyphicon glyphicon-floppy-disk"></span> <g:message code="default.update.label" args="['Numbers']" default="Update"/></a>
        <a class="btn btn-primary btn-danger" data-ng-show="numbers.id"  title="${message(code: 'default.delete.label',args:['Numbers'], default: 'Delete')}" data-ng-click="confirmDeleteNumbers()"><span class="glyphicon glyphicon-trash"></span> <g:message code="default.delete.label" args="['Numbers']" default="Delete"/></a>
        
   </p>
    </div>
    
    <div>
    
    
    <div>
        
        <div class="form-group">
            <label class="control-label" for="firstNumber">
                firstNumber 
            </label>
            <div class="input-group"><input class="form-control" name="firstNumber" type="number" min="1" max="50" data-ng-model='numbers.firstNumber'  required="required"/>
		<div class="error" ng-show="numbersForm.firstNumber.$dirty && numbersForm.firstNumber.$invalid">
		<small class="error" ng-show="!numbersForm.firstNumber.$pristine && numbersForm.firstNumber.$invalid"><g:message code="default.invalid.label" args="['firstNumber']" default=" Invalid firstNumber : "/> <g:message code="default.min.label" args="['1']" default=" min: 1 "/><g:message code="default.max.label" args="['50']" default=" max: 50 "/></small>
		<small class="error" ng-show="numbersForm.firstNumber.$error.number"><g:message code="default.invalid.number.label" args="['firstNumber']" default=" Invalid firstNumber "/></small></div></div>
        </div>
        
        
    </div>
    </div>
    </form>
    </div>
</div>
</div>
</div>

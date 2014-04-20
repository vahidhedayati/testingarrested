
<div data-ng-controller="UploadCtrl">
    <h1>Upload Edit</h1>
    <div data-ng-show="errors.showErrors" class="red">
        <p data-ng-show="errors.showServerError">"Can not connect to the server, try later"</p>
    </div>
     <form name="uploadForm"  novalidate>
    <div>
    <div>
    <div>
    <div>
   
        <p></p>
        
        <a class="btn btn-primary btn-primary" onclick="window.location.href = '#/upload/list'"  title="${message(code: 'default.list.label',args:['Upload'], default: 'List')}"><span class="glyphicon glyphicon-align-justify"></span> 	<g:message code="default.list.label" args="['Upload']" default="List"/></a>
  
        <a class="btn btn-primary btn-success" data-ng-hide="upload.id"  ng-disabled="uploadForm.$invalid" title="${message(code: 'default.save.label',args:['Upload'], default: 'Save')}" ng-enabled="!uploadForm.$invalid" data-ng-click="manualSaveUpload()"><span class="glyphicon glyphicon-floppy-disk"></span> <g:message code="default.save.label" args="['Upload']" default="Save"/></a>
        <a class="btn btn-primary btn-success" data-ng-show="upload.id"  ng-disabled="uploadForm.$invalid" title="${message(code: 'default.update.label',args:['Upload'], default: 'Update')}" ng-enabled="!uploadForm.$invalid" data-ng-click="manualSaveUpload()"><span class="glyphicon glyphicon-floppy-disk"></span> <g:message code="default.update.label" args="['Upload']" default="Update"/></a>
        <a class="btn btn-primary btn-danger" data-ng-show="upload.id"  title="${message(code: 'default.delete.label',args:['Upload'], default: 'Delete')}" data-ng-click="confirmDeleteUpload()"><span class="glyphicon glyphicon-trash"></span> <g:message code="default.update.label" args="['Upload']" default="Delete"/></a>
        <p></p>
    </div>
    <div>
    <div>
    <div>
    
    
    <div>
        
        <div class="fieldcontain">
            <label for="attachment">
                attachment
            </label>
            <input type="file" id="attachment" data-ng-model='upload.attachment'  name="attachment" />
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
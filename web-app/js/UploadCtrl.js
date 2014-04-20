'use strict';
function UploadCtrl(DAO, $rootScope)
{
    if ($rootScope.appConfig) {
        if (!$rootScope.appConfig.token!='') {
            window.location.href = "#/login"
        }
    }

    $rootScope.flags = {save: false};
    $rootScope.errors = {showErrors: false, showServerError: false};

    if(!$rootScope.upload){
    $rootScope.filter = ""
    $rootScope.uploads = [];
    $rootScope.upload = {};
    }

    $rootScope.getAllUpload = function () {
        //get all
        DAO.query({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, controller: 'upload', action: 'list'},
            function (result) {
                $rootScope.uploads = result;
            },
            function (error) {
            });
    };

    $rootScope.newUpload = function () {
    $rootScope.upload = {};
    window.location.href = "#/upload/create"
}

    $rootScope.manualSaveUpload = function () {
        $rootScope.flags.save = false;
        if ($rootScope.upload.id == undefined)
        {
            $rootScope.saveUpload();
        }
        else
        {
            $rootScope.updateUpload();
        }
    }
    
    $rootScope.saveUpload = function(){
    	  var f = document.getElementById('attachment').files[0],
    	      r = new FileReader();
    	  r.onloadend = function(e){
    	   var data = e.target.result;
    	  
    	  
    	
    	  }
    		  r.readAsBinaryString(f);
    		  
    		  DAO.saveFile({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.upload, file:r, controller:'upload', action:'save'},
    			        function (result) {
    			            $rootScope.upload = result;
    			            $rootScope.flags.save = true;
    			        },
    			        function (error) {
    			            $rootScope.flags.save = false;
    			            $rootScope.errors.showErrors = true;
    			            $rootScope.errors.showServerError = true;
    			        }
    			)
    			    ;	  
    	 
    	}    
    $rootScope.saveUpload1 = function () {
        DAO.save({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.upload, controller:'upload', action:'save'},
        function (result) {
            $rootScope.upload = result;
            $rootScope.flags.save = true;
        },
        function (error) {
            $rootScope.flags.save = false;
            $rootScope.errors.showErrors = true;
            $rootScope.errors.showServerError = true;
        }
)
    ;
}
    

$rootScope.updateUpload = function () {
    DAO.update({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, instance:$rootScope.upload, controller:'upload', action:'update'},
    function (result) {
        $rootScope.flags.save = true;
    },
    function (error) {
        $rootScope.flags.save = false;
        $rootScope.errors.showErrors = true;
        $rootScope.errors.showServerError = true;
    }
)
;
}

$rootScope.editUpload = function (upload){
    DAO.get({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, id: upload.id, controller:'upload', action:'show'},
function (result) {
    $rootScope.upload = result;
    window.location.href = "#/upload/edit"
}
,
function (error) {
    $rootScope.errors.showErrors = true;
    $rootScope.errors.showServerError = true;
});
}

$rootScope.confirmDeleteUpload = function () {
    DAO.delete({appName: $rootScope.appConfig.appName, token: $rootScope.appConfig.token, id: $rootScope.upload.id, controller:'upload', action:'delete'},
    function (result) {
        if (result.response == "Upload_deleted") {
            window.location.href = "#/upload/list"
        }
    },
    function (error) {
        $rootScope.errors.showErrors = true;
        $rootScope.errors.showServerError = true;
    }
);}
}
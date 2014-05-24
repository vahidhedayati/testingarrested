modules = {
    application {
        dependsOn 'bootstrap'
        resource url:'js/application.js'
        
    }

    bootstrap {
        dependsOn 'angularControllers'
        resource url:'http://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css'
        resource url:'http://netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js'
        resource url:'http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css'
        resource url:'http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css'
    }
	angularControllers {
		dependsOn 'ngRoute'
		resource url:'js/arrestedDirectives.js'
		resource url:'js/userCtrl.js'
		resource url: 'js/AuthorsCtrl.js'
		resource url: 'js/NumbersCtrl.js'
		resource url: 'js/BooksCtrl.js'

	}
 
   
    ngRoute {
        dependsOn 'angularConfiguration'
        resource url:'http://code.angularjs.org/snapshot/angular-route.min.js'
    }

    angularConfiguration {
        dependsOn 'angularService'
        resource url: 'js/index.js'
    }

    angularService {
        dependsOn 'angularResource', 'angularNgTable'
        resource url: 'js/services.js'
    }

    angularResource {
        dependsOn 'angular'
        resource url:'http://code.angularjs.org/snapshot/angular-resource.min.js'
    }
	
	angularNgTable {
		resource url:'js/ng-table.js'
		resource url:'css/ng-table.css'
	}
	
    angular {
        dependsOn 'jQuery'
        resource url:'http://code.angularjs.org/snapshot/angular.min.js'
    }

    jQuery {
        resource url:'http://code.jquery.com/jquery.min.js'
    }
}

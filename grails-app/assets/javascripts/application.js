//= require jquery/jquery
//= require bootstrap/bootstrap
//= require angular/angular
//= require angular-route/angular-route
//= require angular-resource/angular-resource.min
//= require angular-table/ng-table
//= require testingarrested/index
//= require testingarrested/services
//= require testingarrested/arrestedDirectives
//= require_tree custom-testingarrested
//= require_tree views
//= require_self


if (typeof jQuery !== 'undefined') {
	(function($) {
		$('#spinner').ajaxStart(function() {
			$(this).fadeIn();
		}).ajaxStop(function() {
			$(this).fadeOut();
		});
	})(jQuery);
}

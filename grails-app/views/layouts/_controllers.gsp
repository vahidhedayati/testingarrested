
<div class="container-fluid" data-ng-controller="UserCtrl"  data-ng-show="appConfig.token!=''">


				<div class="btn btn-default">
				<a onclick='window.location.href="#/numbers/list"' title="${message(code: 'default.numbers.label', default: 'Numbers')}">
					<g:message code="default.numbers.label"  default="Numbers"/>
				</a>
				</div>
				

				<div class="btn btn-default">
				<a onclick='window.location.href="#/books/list"' title="${message(code: 'default.books.label', default: 'Books')}">
					<g:message code="default.books.label"  default="Books"/>
				</a>
				</div>
				

				<div class="btn btn-default">
				<a onclick='window.location.href="#/authors/list"' title="${message(code: 'default.authors.label', default: 'Authors')}">
					<g:message code="default.authors.label"  default="Authors"/>
				</a>
				</div>
				
</div>

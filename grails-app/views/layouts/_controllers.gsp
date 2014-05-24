<div class="container-fluid" data-ng-controller="UserCtrl"  data-ng-show="appConfig.token!=''">
	 <a  ng-class="isSelected('authors')? 'btn btn-primary' :'btn btn-default'"  ng-click="setSelectedController('authors')" onclick='window.location.href="#/authors/list"' title="${message(code: 'default.authors.label', default: 'Authors')}">
		<g:message code="default.authors}.label"  default="Authors"/>
	</a>
	 <a  ng-class="isSelected('numbers')? 'btn btn-primary' :'btn btn-default'"  ng-click="setSelectedController('numbers')" onclick='window.location.href="#/numbers/list"' title="${message(code: 'default.numbers.label', default: 'Numbers')}">
		<g:message code="default.numbers}.label"  default="Numbers"/>
	</a>
	 <a  ng-class="isSelected('books')? 'btn btn-primary' :'btn btn-default'"  ng-click="setSelectedController('books')" onclick='window.location.href="#/books/list"' title="${message(code: 'default.books.label', default: 'Books')}">
		<g:message code="default.books}.label"  default="Books"/>
	</a>

</div>

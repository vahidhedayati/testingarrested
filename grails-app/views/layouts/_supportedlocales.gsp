 <g:set var="lang" value="${session.'org.springframework.web.servlet.i18n.SessionLocaleResolver.LOCALE' ?: org.springframework.web.servlet.support.RequestContextUtils.getLocale(request).toString().substring(0,2)}"/>			
<li class="dropdown controller">
   	<a class="dropdown-toggle" role="button" data-toggle="dropdown" data-target="#">
      ${lang.toString()}
    </a>
  	 <ul class="dropdown-menu dropdown-menu-dark" role="menu">
      	<li><a class="fa fa-language icon-color" title="English" data-ng-model="lang" data-ng-click="setLang('en')">
            <g:message code="language.en" default="en"/>
         </a></li>
         <li><a class="fa fa-language icon-color" title="German"  data-ng-model="lang" data-ng-click="setLang('de')">
           <g:message code="language.de" default="de"/>
         </a></li>
   </ul>
</li>
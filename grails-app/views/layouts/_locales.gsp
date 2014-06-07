
  <g:set var="lang" value="${session.'org.springframework.web.servlet.i18n.SessionLocaleResolver.LOCALE' ?: org.springframework.web.servlet.support.RequestContextUtils.getLocale(request).toString().substring(0,2)}"/>			
<li class="dropdown controller">
   	<a class="dropdown-toggle" role="button" data-toggle="dropdown" data-target="#">
      ${lang.toString()}
    </a>
  	 <ul class="dropdown-menu dropdown-menu-dark" role="menu">
      	<li><select name="lang" data-ng-model='c.SelectedOption.value' 
 				data-ng-controller="UserCtrl" data-ng-init="getAllLocales()" 
 				ng-options="c.value as c.text for c in locales  track by c.value"  
 			 	ng-change="setLang(c.SelectedOption.value)" required="" class="many-to-one"/>
 		</li>
         
   </ul>
</li>			

<div class="container" >
   <div class="row">
        <div class="col-md-6 col-md-offset-2" >
            <div class="panel panel-default">
                <div class="panel-body">
                  <h1 id="h1Header"><g:message code="default.dashboard.title" args="['{{user.username}}']" default="{{user.username}} Dashboard"/></h1></div>
                  
                  <div  data-ng-controller="DashboardCtrl" data-ng-init="dashboard()">
         			<h2>
         				<g:message code="default.userLocale.title" args="['{{myLang.lang}}']" default="{{myLang.lang}} is you new Locale"/>
         			</h2>	
                  </div>
           </div>
         </div>
   </div>
 </div>
 
         

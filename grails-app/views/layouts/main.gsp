<!DOCTYPE html>
<html lang="en" data-ng-app="testingarrested">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title><g:layoutTitle default="Arrested"/></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="${resource(dir: 'images', file: 'favicon.ico')}" type="image/x-icon">
    <link rel="apple-touch-icon" href="${resource(dir: 'images', file: 'apple-touch-icon.png')}">
    <link rel="apple-touch-icon" sizes="114x114" href="${resource(dir: 'images', file: 'apple-touch-icon-retina.png')}">
    <link rel="stylesheet" href="${resource(dir: 'css', file: 'arrested.css')}" type="text/css">
    <link rel="stylesheet" href="${resource(dir: 'css', file: 'mobile.css')}" type="text/css">
    <r:require module='application'/>
    <g:layoutHead/>
    <r:layoutResources />
</head>
<body>
<g:render template="/layouts/navbar"/>
<div id="Content" class="container">
<g:render template="/layouts/controllers"/>
<g:layoutBody/>
</div>
<div class="footer" role="contentinfo"></div>
<r:layoutResources />
</body>
</html>

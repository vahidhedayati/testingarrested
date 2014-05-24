'use strict';
angular.module('services',['ngResource','ngTable']).
    factory('DAO', function($resource){
        return $resource('/:appName/:controller/:action',{
            format:'json', callback:'JSON_CALLBACK'},{
            'get':   {method:'GET', params:{appName:'@appName', controller:'@controller', action:'@action', token:'@token', id:'@id'}, isArray:false, timeout:20000},
            'query': {method:'GET', params:{appName:'@appName', controller:'@controller', action:'@action', token:'@token'}, isArray: true, timeout:20000},
            'save':  {method:'POST', params:{appName:'@appName', controller:'@controller', action:'@action', token:'@token', instance:'@instance', username:'@username', passwordHash:'@passwordHash'}, isArray:false, timeout:20000},
            'update':{method:'PUT', params:{appName:'@appName', controller:'@controller', action:'@action', token:'@token', instance:'@instance'}, isArray:false, timeout:20000},
            'delete':{method:'DELETE', params:{appName:'@appName', controller:'@controller', action:'@action', token:'@token', id:'@id'}, isArray:false, timeout:20000}
        });
    });
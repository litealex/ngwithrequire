define(['angular', 'ngRoute'], function(){
    'use strict';
     var proxyController = function($scope, $controller, $route) {
        var rc = $route.current;
        require(['app/controllers/' + rc.$$route.ctrl], function(ctrl) {
            $scope.$apply(function() {
                $controller(ctrl, rc.locals);
            });
        });
    };

    return angular
                .module('myApp', ['ngRoute'])
                .controller('ProxyController', ['$scope', '$controller', '$route', proxyController]);
});
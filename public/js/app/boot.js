define(['angular', 'myApp'], function(angular, myApp) {
    'use strict';

    myApp.config(['$routeProvider', function($routeProvider) {
        var routes = {
            '/': {
                ctrl: 'FirstController',
                template: '<h1>{{name}}</h1>'
            },
            '/about': {
                ctrl: 'AboutController',
                template: '<h1>About: {{name}}</h1>',
                resolve: {
                    user: function() {
                        return {
                            name: 'alex'
                        };
                    }
                }
            }
        },
        routePath, route;

        for(routePath in routes) {
        	route = routes[routePath];
        	route.controller = 'ProxyController';
        	$routeProvider.when(routePath, route);
        }

    }]);

    return {
        init: function() {
            angular.bootstrap(document.body, [myApp.name]);
        }
    };
});

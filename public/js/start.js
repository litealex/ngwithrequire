(function() {
    'use strict';
    require.config({
        paths: {
            'angular': 'ven/angular',
            'ngRoute': 'ven/angular-route',
            'myApp': 'app/app'

        },
        shim: {
            'angular': {
                exports: 'angular'
            },
            'ngRoute': {
                deps: ['angular']
            }
        }
    });

    require(['app/boot'], function(boot){
    	boot.init();
    });

}());

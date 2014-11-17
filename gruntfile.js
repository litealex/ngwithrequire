module.exports = function(grunt) {
    var jspaths = ['public/js/start.js', 'public/js/app/**/*.js'];

    grunt.initConfig({
        jshint: {
            all: jspaths
        },
        watch: {
            app: {
                files: jspaths,
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            }
        },
        copy: {
            ven: {
                files: [{
                    flatten: true,
                    src: ['bower_components/angular/angular.js',
                        'bower_components/angular-route/angular-route.js',
                        'bower_components/requirejs/require.js'
                    ],
                    expand: true,
                    dest: 'public/js/ven/'
                }]
            }
        }
    })


    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
};

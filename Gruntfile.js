"use strict";

module.exports = function ( grunt ) {

    // Project configuration.
    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' ),

        jshint: {

            options: {
                jshintrc: ".jshintrc"
            },
            exclude: [
                //'js/jquery-1.10.2.js'
            ],
            defaults: [
                "js/main.js",
                'Gruntfile.js'
            ]
        },

        sass: {
            dist: {
                files: {
                    'css/main.css': 'sass/main.scss'
                },
                options: {
                    style: 'compressed'
                }
            },
            dev: {
                options: {
                    sourcemap: true
                },
                files: {
                    'css/main.css': 'sass/main.scss'
                }
            }
        },

        watch: {
            sass: {
                files: ['sass/*.scss'],
                tasks: ['sass:dev'],
                options: {
                    spawn: false
                },
            },
        },

        csslint: {
            strict: {
                options: {
                    csslintrc: '.csslintrc',
                    import: 2,
                    formatters: ['compact']
                },
                src: [
                    'css/*.css'
                ]
            }
        },

        connect: {
            mock: {
                options: {
                    base: 'src/',
                    open: true,
                    keepalive: true
                }
            }
        }

    });

    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    grunt.loadNpmTasks( 'grunt-contrib-csslint' );
    grunt.loadNpmTasks( 'grunt-contrib-connect' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-sass' );

    // Runs all checkstyle stuff
    grunt.registerTask( 'default', [
        'jshint',
        'csslint',
        'sass:dev',
        'watch'
    ] );

};

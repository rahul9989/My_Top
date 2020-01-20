module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'compressed'      // expanded
                },
                files: {                         // Dictionary of files
                    'source/build/css/sign_of.css': 'source/scss/main.scss',       // 'destination': 'source'
                }
            }
        },

        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['source/build/js/jquery-3.3.1.min.js', 
                      'source/build/js/bootstrap.min.js', 
                      'source/build/js/jquery.nice-select.min.js', 
                      'source/build/js/bootstrap-select.js', 
                      'source/build/js/moment.js', 
                      'source/build/js/bootstrap-datetimepicker.min.js', 
                      'source/build/js/jquery.dataTables.js', 
                      'source/build/js/dataTables.responsive.min.js', 
                      'source/build/js/dataTables.bootstrap.min.js', 
                      'source/js/responsive.bootstrap.min.js'], // OR src: ['source/build/js/*'] can be used

                dest: 'source/build/js/sign_of.js',
            },
            dist: {
                src: ['source/build/css/jquery.dataTables.min.css', 
                      'source/build/css/dataTables.bootstrap.min.css', 
                      'source/build/css/responsive.bootstrap.min.css', 
                      'source/build/css/sign_of.css'],

                dest: 'source/css/main.css',
            },
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },

            build: {
                src: 'source/build/js/sign_of.js',
                dest: 'source/js/sign_of.min.js'
            }
        }

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'concat', 'uglify']);

};
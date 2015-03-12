module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        '../css/*.css',
                        '../**/*.cshtml',
                        '../scripts/app.js'
                    ]
                },
                options: {
                    watchTask: true,
                    proxy: 'localhost:59478'
                }
            }
        },

        copy: {
            main: {
                files: [
                    // Vendor scripts.
                    {
                        expand: true,
                        cwd: 'bower_components/',
                        src: ['**/*.js'],
                        dest: '../scripts/'
                    },

                    // Custom scripts.
                    {
                        expand: true,
                        filter: 'isFile',
                        flatten: true,
                        src: [
                            'js/**.js'
                        ],
                        dest: '../scripts/'
                    },

                    // Fonts.
                    {
                        expand: true,
                        filter: 'isFile',
                        flatten: true,
                        cwd: 'bower_components/',
                        src: ['components-font-awesome/fonts/**'],
                        dest: '../fonts'
                    },
                ]
            },

            styles: {
                // Foundation.
                expand: true,
                flatten: true,
                cwd: 'scss/',
                src: ['**/*.scss'],
                dest: '../scss/',

                // Copy if file does not exist.
                filter: function (filepath) {
                    // NPM load file path module. 
                    var path = require('path');

                    // Construct the destination file path.
                    var dest = path.join(
                      grunt.config('copy.styles.dest'),
                      '_' + path.basename(filepath)
                    );

                    // Return false if the file exists.
                    return !(grunt.file.exists(dest));
                },
            },
        },

        sass: {
            options: {
                includePaths: ['bower_components/foundation/scss']
            },
            dist: {
                options: {
                    outputStyle: 'nested'
                },
                files: {
                    '../css/app.css': '../scss/app.scss'
                }
            }
        },

        watch: {
            grunt: { files: ['Gruntfile.js'] },

            sass: {
                files: '../scss/**/*.scss',
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('build', ['sass', 'copy']);
    grunt.registerTask('default', ['browserSync', 'watch']);
}

module.exports = function (grunt) {
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: ['src/sass/**/*.{scss,sass}', 'src/sass/_partials/**/*.{scss,sass}'],
                tasks: ['sass:main']
            },
            js: {
                files: ['src/js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    livereload: true
                }
            },
            images:{
                files:['src/img'],
                task:['imagemin', 'copy']
            },
            livereload: {
                files: [
                    'dist/*.html',
                    'dist/js/**/*.{js,json}',
                    'dist/css/*.css',
                    'dist/img/**/*.{png,jpg,jpeg,gif,webp,svg}',
                    'Sketches/*.html',
                    'Sketches/*.php',
                    'Sketches/js/**/*.{js,json}',
                    'Sketches/css/*.css',
                    'Sketches/img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
                options: {
                    livereload: true
                }
            }
        },
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'compressed'
            },
            main: {
                files: {
                    'dist/css/main.min.css': 'src/sass/main.scss'
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/js/main.min.js': ['src/js/index.js']
                }
            }
        },
        browserify: {
            dist: {
                files: {
                    // destination for transpiled js : source js
                    'dist/js/main.js': 'src/js/index.js'
                },
                options: {
                    transform: [['babelify', { presets: "es2015" }]],
                    browserifyOptions: {
                        debug: true
                    }
                }
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/js/index.js',],
                dest: 'dist/js/main.js',
            },
        },
        imagemin: {
            dynamic: {
                options: { // Target options 
                    optimizationLevel: 3,
                    cache: false
                },
                files: [{
                    expand: true, // Enable dynamic expansion 
                    cwd: 'src/img', // app matches are relative to this path 
                    src: ['*.{ jpg, gif, png}'], // Actual patterns to match 
                    dest: 'dist/img' // Destination path prefix 
                }]
            }
        },
        copy: {
            // making working assets copy
            main: {
                files: [{
                    expand: false,
                    flatten: false,
                    src: ['src/img/*.{ jpg, gif, png}'],
                    dest: 'dist/img',
                    filter: 'isFile'
                },]
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: ['dist/css/*.css', 'dist/**/*.js', 'browserify:dist', 'dist/*.html']
                },
                options: {
                    watchTask: true,
                    server: 'dist/'
                }
            }
        },
    });
    grunt.registerTask('default', ['browserSync', 'watch', 'uglify', 'sass:main', 'copy']);
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-concat');

};
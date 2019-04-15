module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: ['src/sass/**/*.{scss,sass}', 'src/sass/_partials/**/*.{scss,sass}'],
                tasks: ['sass:Sketches']
            },
            livereload: {
                files: ['Sketches/*.html', 'Sketches/*.php', 'Sketches/js/**/*.{js,json}', 'Sketches/css/*.css', 'Sketches/img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
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
            Sketches: {
                files: {
                    'Sketches/css/bootstrap.min.css': 'src/sass/bootstrap.scss'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: ['Sketches/css/*.css', 'Sketches/**/*.js', 'Sketches/*.html']
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },
    });
    grunt.registerTask('default', ['browserSync', 'watch', 'sass:Sketches']);
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
};
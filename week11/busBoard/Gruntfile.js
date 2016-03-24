module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            options: {
                compress: true
            },
            task1: {
                files: {
                    "css/app.min.css": "css/app.less"
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 7', 'ie 8', 'ie 9'],
                map: true
            },
            less: {
                src: 'css/*.css'
            },
            css: {
                src: 'css/*.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('default', ['less', 'autoprefixer']);
};
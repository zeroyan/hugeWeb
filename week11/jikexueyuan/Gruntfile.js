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
        uglify: {
            all: {
                files: {
                    'js/app.min.js': 'js/app.js',
                    'js/addons.min.js': 'js/plugin.js'
                }
            }
        },
        concat: {
            bar: {
                src: ['js/*.min.js'],
                dest: 'js/all.min.js'
                //'js/final.js': 'js/*.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['less', 'uglify', 'concat']);
};
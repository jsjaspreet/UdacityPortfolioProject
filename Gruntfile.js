module.exports = function (grunt) {
    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    sizes: [{
                        name: 'small',
                        width: 250
                    }, {
                        name: 'large',
                        width: 900
                    }, {
                        name: 'medium',
                        width: 365
                    }]
                },
                files: [{
                    expand: true,
                    src: ['styles/images/**/*.{jpg,gif,png}',
                        '!styles/images/**/*-large.{jpg,gif,png}',
                        '!styles/images/**/*-small.{jpg,gif,png}',
                        '!styles/images/**/*-medium.{jpg,gif,png}'],
                    cwd: 'resources/',
                    dest: 'dist/'
                }]
            }
        },
        clean: {
            dist: ["dist/"]
        },
        "jsbeautifier": {
            files: ["resources/scripts/**/*"]
        }
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.registerTask('default', ['clean', 'responsive_images']);

};

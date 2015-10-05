module.exports = function (grunt) {
	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {
					sizes: [{
						name: 'small',
						width: 240,
						height: 240
					}, {
						name: 'large',
						width: 640
					}]
				},
				files: [{
					expand: true,
					src: ['styles/images/**/*.{jpg,gif,png}'],
					cwd: 'resources/',
					dest: 'dist/'
				}]
			}
		},
		clean: {
			dist: ["dist/"]
		}
	});

	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.registerTask('default', ['clean', 'responsive_images']);

}
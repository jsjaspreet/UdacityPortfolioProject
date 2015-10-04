module.exports = function (grunt) {
grunt.initConfig({
	responsive_images: {
		dev: {
			options: {},
			sizes: [{
				width: 320,
				height: 240
			}, {
				name: 'large',
				width: 640
			}],
			files: [{
				expand: true,
				src: ['styles/images/**/*.{jpg,gif,png}'],
				cwd: 'resources/',
				dest: 'dist/'
			}]
		}
	}
});

grunt.loadNpmTasks('grunt-responsive-images');
grunt.registerTask('default', ['responsive_images']);

}
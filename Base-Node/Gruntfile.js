/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		/*clean: {
			resources: [
				'Resources',
				'tmp',
			],
			build: [
				'build'
			]
		},
		copy: {
			build: {
				files: [
					{expand: true, src: ['**'], cwd: 'src/iOS/', dest: 'build-ts/'}
				]
			}
		}*/
	});

	grunt.registerTask('build', 'Build the browser files', function() 
	{
		var exec = require('child_process').exec;

		var compile = exec('$CEYLON_HOME/bin/ceylon compile-js source/ceylon/examples/basic/browser/*.ceylon', function (error, stdout, stderr) 
		{
			console.log('stdout: ' + stdout);
			console.log('stderr: ' + stderr);
			if (error !== null) 
			{
				console.log('exec error: ' + error);
			}
		});
	});
	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['build']);

};

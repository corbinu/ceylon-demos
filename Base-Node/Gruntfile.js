/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		clean: {
			build: [
				'node_modules/ceylon/examples'
			]
		},
		copy: {
			build: {
				files: [
					{expand: true, src: ['**'], cwd: 'modules/ceylon/examples/', dest: 'node_modules/ceylon/examples/'}
				]
			}
		}
	});

	grunt.registerTask('build', 'Build the browser files', function() 
	{
		var exec = require('child_process').exec;

		var compile = exec('$CEYLON_HOME/bin/ceylon compile-js source/ceylon/examples/basic/node/*.ceylon', function (error, stdout, stderr) 
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

	grunt.registerTask('default', ['clean:build', 'build', 'copy:build']);

};

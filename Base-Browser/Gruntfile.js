/*global module:false*/
module.exports = function(grunt) {

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

	grunt.registerTask('default', ['build']);

};

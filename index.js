'use strict';

// Choosing an OSS license doesn’t need to be scary
// http://choosealicense.com/

var l = console.log.bind();

//var fs = require('fs');
var _ = require('lodash');
//var colors = require('colors/safe');

var licenseModelBuilder = require('./src/licenseModelBuilder.js');
var licenses = licenseModelBuilder({
	spdx: require('spdx-license-list'),
	common: require('./licenses.json')
});


function licenseListPrinter(list) {
	var keys = Object.keys(list).sort();
	_.forEach(keys, function(key) {
		var lic = list[key];
		console.log(key + ': ' + lic.name);
	});
}


var commands = {
	list: licenseListPrinter
};

var argv = require('./src/argv.js')(licenses, commands);

//var packageJson = require('./package.json');

// var config = {
// 	fileName: 'LICENSE',
// 	fileExists: function() {
// 		return fs.existsSync(this.fileName);
// 	},
// 	license: {
// 		name: packageJson.license,
// 		valid: spdxlicenses[packageJson.license] !== undefined
// 	},
// 	spdx: spdxlicenses[packageJson.license]
// };

// if (config.license.valid) {
// 	config.license.osiApproved = config.spdx.osiApproved;
// }


// if (!argv.valid) {
// 	process.exit();
// }

// if (argv.empty) {
// 	console.log('Current license: ' + config.license.name);
// 	if (config.license.name) {
// 		console.log('Valid SPDX: ' + config.license.valid);
// 		if (config.license.valid) {
// 			console.log('OSI approved: ' + config.license.osiApproved);
// 		}

// 		if (config.fileExists()) {
// 			console.log('License file exists.');
// 		} else {
// 			console.log(colors.magenta('License file does not exist!'));
// 		}

		
// 	}
// }

// Usage:
// --add=MIT

// if (argv.i) {
// 	console.log('interactive');
// }


//console.log(spdxLicenseList.MIT);
//=> { name: 'MIT License', osiApproved: true }

if (argv.add) {


	// if (currentLicense) {

	// }

	// if () {

	// }
}


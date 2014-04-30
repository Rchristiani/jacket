#!/usr/bin/env node

var argv = require('optimist').argv;

var apiKey = 'a30713ae62fb4d00';
var location;

if(argv.location !== undefined || argv.loc !== undefined) {
	location = argv.location || argv.loc;
}

if(argv.location === undefined) {
	console.log("Please set a location");
	return;
}

console.log(location);
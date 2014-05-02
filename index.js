#!/usr/bin/env node

var argv = require('optimist').argv;
var http = require('http');
var sys = require('sys')
var exec = require('child_process').exec;


var apiKey = 'a30713ae62fb4d00';
var location;

if(argv.location !== undefined || argv.loc !== undefined) {
	location = argv.location || argv.loc;
	var splitList = location.split(',');
	var country = splitList[0];
	var city = splitList[1];
	var apiUrl = 'http://api.wunderground.com/';
	var path = 'api/a30713ae62fb4d00/geolookup/forecast/q/'+ country +'/' + city + '.json';
	var data = '';
	http.get(apiUrl + path, function(res) {
		res.on('data',function(chunk) {
			data += chunk;
		});
		res.on('end', function() {
			// Comes back as string, so you need to parse it
			data = JSON.parse(data);
			banner(data);
		});
	});	
}
else {
	console.log('Please provide a location with either --location or --loc');
}

function banner(data) {
	exec('banner', function(error, stdout, stdin) {
		sys.puts(stdout);
	});
}


console.log(location);
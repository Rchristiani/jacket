#!/usr/bin/env node

var argv = require('optimist').argv;
var http = require('http');

var apiKey = 'a30713ae62fb4d00';
var location;

if(argv.location !== undefined || argv.loc !== undefined) {
	location = argv.location || argv.loc;
	var splitList = location.split(',');
	var country = splitList[0];
	var city = splitList[1];
	var apiUrl = 'http://api.wunderground.com/';
	var path = 'api/a30713ae62fb4d00/geolookup/conditions/forecast/q/'+ country +'/' + city + '.json';
	var data = '';
	http.get(apiUrl + path, function(res) {
		res.on('data',function(chunk) {
			data += chunk;
		});
		res.on('end', function() {
			console.log(data);
		});
	});	
}
else {
	console.log('Please provide a location with either --location or --loc');
}

console.log(location);
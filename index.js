#!/usr/bin/env node
'use strict';

var argv = require('optimist').argv;
var http = require('http');
var location;


if(argv.location !== undefined || argv.loc !== undefined) {
	location = argv.location || argv.loc;
	var splitList = location.split(',');
	var country = splitList[0];
	var city = splitList[1];
	var apiUrl = 'http://api.wunderground.com/';
	var path = 'api/a30713ae62fb4d00/geolookup/conditions/q/'+ country +'/' + city + '.json';
	var data = '';
	http.get(apiUrl + path, function(res) {
		res.on('data',function(chunk) {
			data += chunk;
		});
		res.on('end', function() {
			// Comes back as string, so you need to parse it
			data = JSON.parse(data);
			printToScreen(data.current_observation);
		});
	});
}
else {
	console.log('Please provide a location with either --location or --loc');
}

function printToScreen(data) {
	var temp = data.temp_c;
	var conditions = data.weather;

	if(temp > 15 && temp < 20) {
		console.log("No I think you will be ok");
	}
	else if(temp < 15) {
		console.log("Yes");
	}
	else {
		console.log("It is too damn hot outside!");
	}
}
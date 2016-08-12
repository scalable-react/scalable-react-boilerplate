/*eslint-disable */
var express = require('express');
var app = express();

app.set('port', (process.env.NODE_ENV || 5000));

app.use(express.static(__dirname + '/app/build'));

app.get('/', function (request, response) {
	response.render('/app/build/index.html');
});


app.listen(app.get('port'), function () {
	console.log('Node app is running on port', app.get('port'));
});

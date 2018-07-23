var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine','ejs');
app.use('/assets', express.static('stuff'));



app.get('/',function (req, res) {
	res.render('index');
});

app.get('/contact',function (req, res) {
	res.render('contact',{qs: req.query});
});

app.post('/contact',urlencodedParser, function (req, res) {
	console.log(req.body); 
	res.render('contact-success',{data: req.body});
});

app.get('/profile/:name',function (req, res) {
	var data = {age:29, job: 'ninja',hobbies:['eating','fighting','fishing']};
	res.render('profile',{person: req.params.name,data: data});
});

app.listen(3000);



/*var http = require('http');
var fs = require('fs');


var server = http.createServer(function (req,res) {
	console.log('request was made:'+req.url);
	if (req.url === '/home' ||  req.url === '/') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname +'/index.html').pipe(res);		

	}else if (req.url === '/contact') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname +'/contact.html').pipe(res);		
	}else if (req.url === '/api/ninjas') {
		var ninjas = [{name: 'Ryu',age:29},{name: 'yoshi',age:32}];
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(ninjas));
	}else{
		res.writeHead(404,{'Content-Type':'text/html' });
		fs.createReadStream(__dirname + '/404.html').pipe(res);
	}
});

server.listen(3000,'127.0.0.1');
console.log('yo dawgs, now listening to port 3000');
*/


/*
myReadStream.on('data',function (chunk) {
	console.log('new chunk received');
	myWriteStream.write(chunk);
});
*/


/*var fs = require('fs');
fs.unlink('./stuff/writeMe.txt', function() {
	fs.rmdir('stuff');
})
*/


/*fs.mkdir('stuff',function () {
	fs.readFile('readMe.txt','utf8',function (err,data) {
		fs.writeFile('./stuff/writeMe.txt',data);
	});
});
*/
/*fs.readFile('readMe.txt', 'utf8',function (err,pora) {
	console.log(pora);
});
*/


/*var events = require('events');
var util = require('util');

var Person = function (name) {
	this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

people.forEach(function (person) {
	person.on('speak', function (msg) {
		console.log(person.name + 'said:' + msg);
	});
});

mary.emit('speak','hey dudes');*/


//JSON
/*var http = require('http');
var fs = require('fs');


var server = http.createServer(function (req,res) {
	console.log('request was made:'+req.url);
	res.writeHead(200,{'Content-Type': 'application/json'});

	var myObj = {
		name: 'Ryu',
		job:   'Ninja',
		age:29
	};
	res.end(JSON.stringify(myObj));
});

server.listen(3000,'127.0.0.1');
console.log('yo dawgs, now listening to port 3000');

*/

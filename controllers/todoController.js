var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to the database
mongoose.connect('mongodb://Porag:porag500600@ds147361.mlab.com:47361/todo22');

//Create a schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
	item: String 
});

var Todo = mongoose.model('TOdo',todoSchema);


//var data = [{item: 'get milk'}, {item: 'walk dog'},{item: 'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function (app) {
	
app.get('/todo',function (req,res) {
	//get data from mongodb and pass it to view
	Todo.find({}, function (err,data) {
		if (err) throw err;
		res.render('todo',{todos: data});
	});
	
});

app.post('/todo',urlencodedParser, function (req,res) {
	//get data from the view and it to mongdb
	var newTodo = Todo(req.body).save(function (err,data) {
		if(err) throw err;
		res.json(data);
	});
	
});


app.delete('/todo/:item',function (req,res) {
	//delete the request data from mongodb
	Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function (err,data) {
		if (err) throw err;
		res.json(data);
	});
	
});



};
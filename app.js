var express = require('express');
var todoController = require('./controllers/todoController');
 
var app = express();

//set up template engine
app.set('view engine', 'ejs');

//sttic files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('you are listening port 3000'); 
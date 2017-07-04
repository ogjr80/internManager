
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var mainRoutes = require('./routes/intern.route'); 

mongoose.connect('mongodb://gideon:P@$w0rd101@ds147902.mlab.com:47902/internsdb', function(){
    console.log('connection to mlab successful for internsdb'); 
}); 

// mongoose.Promise = global.Promise; 

var app = express()

app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: true}))
app.use(mainRoutes); 


app.listen(3000, function(){
    console.log('app listening on port 3000');
})

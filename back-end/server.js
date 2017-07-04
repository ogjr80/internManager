
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var internsRoutes = require('./routes/intern.route'); 
var educationRoutes  = require('./routes/education.route'); 
var trainingRoutes = require('./routes/training.route'); 


mongoose.connect('mongodb://localhost:27017/internsdb', function(err){
    if (err){
        console.log(err);
    }else{
             console.log('connection to mlab successful for internsdb');
    }
    
}); 

// mongoose.Promise = global.Promise; 

var app = express()

app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: true}))
app.use(internsRoutes);
app.use(educationRoutes);  
app.use(trainingRoutes); 


app.listen(3000, function(){
    console.log('app listening on port 3000');
})

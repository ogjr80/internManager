var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var educationSchema = new Schema({
    qualification: String, 
    startDate: String, 
    endDate: String, 
    University: String
  
});


module.exports = mongoose.model('Education', educationSchema); 

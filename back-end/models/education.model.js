var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var educationSchema = new Schema({
    qualification: String, 
    startDate: {type: Date, default: Date.now}, 
    endDate: {type: Date, default: Date.now},
    university: String, 
});


module.exports = mongoose.model('Education', educationSchema); 

var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var examSchema = new Schema({
    code: String, 
    name: String, 
    description: String, 
    status:String /*pass or in progress, */,
    url: String

})


module.exports = mongoose.model('Education', educationSchema); 

var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var trainingSchema = new Schema({
    code: String,
    name: String, 
    description: String, 
    type: String, 
})


module.exports = mongoose.model('Training', trainingSchema); 

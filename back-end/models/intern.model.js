var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var InternSchema = new Schema({
  idnumber: String, 
  firstname: String, 
  lastname: String, 
  middlename: String, 
  age: Number, 
  address: String, 
  gender: String, 
  startDate: Date, 
  endDate: Date, 
  education:[ {type: Schema.Types.ObjectId, ref: 'Education'}] ,
  training: [{type: Schema.Types.ObjectId, ref: 'Training'}], 
  examsWritten: [{type: Schema.Types.ObjectId, ref: 'Exams'}],
  skills: [{type: String}]
});



module.exports = mongoose.model('Intern',InternSchema);
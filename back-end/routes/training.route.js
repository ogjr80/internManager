var router = require('express').Router();
var Training = require('../models/training.model');

router.get('/trainings', function(req, res){
    Training.find({}, function(err, results){
        if(err) return next(err); 
        return res.json({data: results}); 
    });
}); 

router.post('/trainings', function(req, res){
    var trainings = new Training(req.body); 
    trainings.save(function(err, savedTrainings){
        if(err) return next(err); 
        return res.json({trainings: savedTrainings})
    }); 
}); 

module.exports = router;
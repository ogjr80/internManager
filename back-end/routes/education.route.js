var router = require('express').Router();
var Education = require('../models/education.model');

router.get('/educations', function(req, res){
    Education.find({}, function(err, results){
        if(err) return next(err); 
        return res.json({data: results}); 
    });
}); 

router.post('/educations', function(req, res){
    var education = new Education(req.body); 
    education.save(function(err, savedEducation){
        if(err) return next(err); 
        return res.json({educations: savedEducation})
    }); 
}); 







module.exports = router;
var router = require('express').Router();
var Intern = require('../models/intern.model');



router.get('/interns', function(req, res,next){
        Intern.find({})
        .populate(['education','training'])
        .exec(function(err, results){
            if(err) return next(err); 
            return res.json({Interns: results})
        }); 
}); 


router.post('/interns', function(req, res,next){
    var interns = new Intern(req.body); 
    interns.save(function(err, savedInterns){
        if(err) return next(err); 
        return res.json(savedInterns); 
    });
}); 





// router.get('/interns/:id', (req,res,next)=>{
//     Intern.find({ idnumber: req.params.id},function(err, intern){
//             if (err) return next(err);
//             return  res.json(intern)
//     });
// });


// router.post('/interns')



// router.put('/intern/:id', (req,res,next)=>{
//     Aysnc.waterfall([
//         function(callback){
//             Intern.find({ idnumber: req.params.id},function(err, intern){
//             if (err) return next(err);
            
//             callback(null, intern);
//     });
//         },
//         function(intern){
//             intern.firstname = req.body.firstname;
//             intern.lastname = req.body.lastname;
//             intern.address = req.body.address;

//             intern.save((err,savedIntern)=>{
//                 if (err) return next(err);
//                 res.json('intern details updated successfully');
//             })
//         }
//     ])
    
// });

// router.post('/intern/:id', (req,res,next)=>{
//     Intern.find({_id: req.params.id},function(err, interns){
//             if (err) return next(err);
//             res.json(interns)
//     });
// });






module.exports = router;
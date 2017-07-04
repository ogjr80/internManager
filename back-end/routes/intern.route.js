var router = require('express').Router();
var Intern = require('../models/intern.model');


// router.get('/interns', function(req,res,next){
//         Intern.find({},function(err, interns){
//                 if (err) return next(err);
//              return res.json(interns)
//     });
// });


router.get('/interns', function(req, res){
        Intern.find({}, function(err, results){
                if(err) return next(err); 
                return res.json(results); 
        }); 
}); 



// router.get('/intern/:id', (req,res,next)=>{
//     Intern.find({ idnumber: req.params.id},function(err, intern){
//             if (err) return next(err);
//             res.json(intern)
//     });
// });

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

// router.post('/remove-intern/:id', (req,res,next)=>{
//     Intern.find({_id: req.params.id},function(err, interns){
//             if (err) return next(err);
//             res.json(interns)
//     });
// });






module.exports = router;
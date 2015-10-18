var User = require('../models/user'),
    config = require ('../config');

var secretKey = config.secretKey;

module.exports = function(app, express){

    var api = express.Router();


    api.post('/signup', function(req,res){
       var user = new User({
           firstname: req.body.firstName,
           lastname: req.body.lastName,
           username: req.body.username,
           password: req.body.password,
           email: req.body.email,
           role: req.body.role
       });

        user.save(function(err){
           if(err){
               console.log('user not saved');
               res.send(err);
               return
           }
            console.log(user);
            res.json({ message: "user above added" });
        });
    });

   api.post('/login', function(req,res){
      User.findOne({
        username: req.body.username
      }).select('password').exec(function(err,user){
          if(err){
            throw err;
          }
          if(!user){
            res.send({message: "User not found"});
          }else if(user){
              var validPass = user.comparePassword(req.body.password);
              
              if(!validPass){
                res.send({message: "wrong password"});
              }
              res.send({message: "logged in"})
          };
      });
   });

    api.get('/users', function(req,res){
      User.find({}, function(err,users){
        if(err){
          res.send(err);
          return;
        }
        res.json(users);
      });
    });
     

    return api;
};


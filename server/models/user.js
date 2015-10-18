var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');


var userModel = new Schema({

    username: { type: String, required: true, index: {unique:true}},
    password:{type: String, required:true, select:false },
    email:{ type: String ,required:true},
    firstName: {type: String},
    lastName: {type: String},
    rate: {type: Number},
    gender:{type: String},
    language:[{
        type: String,
        required: true
    }],
    featured:{type: Boolean},
    availability: {type: String, default: false},
    role: {type: String, default: 'Student'}

});


userModel.pre('save', function(next){
    var user = this;

    if(!user.isModified('password')) return next();
    bcrypt.hash(user.password, null,null,function(err, hash){
       if(err) return next(err);
        user.password = hash;
        next();
    });
});

userModel.methods.comparePassword = function(password){
    var user = this;

    return bcrypt.compareSync(password, user.password);
}

module.exports = mongoose.model('user', userModel);
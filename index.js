var express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./server/config');


mongoose.connect(config.database);
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error...'));
db.once('open', function callback(){
   console.log('connected');
});

var env = process.env.PORT || 80;


var app = express();

//setting up views engine
app.set('views', __dirname + '/public/app/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//serving static files
app.use(express.static(__dirname + '/public'));



//serving index
app.get('/' , function(req,res){
    res.render('index.html');
});
app.get('/blog' , function(req,res){
    res.render('blog.html');
});
//model
var user = require('./server/models/user');

//route
//var router = express.Router();
//router.route('/teacher')
//    .get(function(req,res){
//    teacher.find(function(err, teacher){
//       if(err){
//           console.log('teacher not found');
//       }else{
//          res.json(teacher);}
//    });
//});


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
var api = require('./server/routes/api')(app,express);
app.use('/api', api);

app.listen(config.port);


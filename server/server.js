var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var multer = require('multer');
var app = express();
var fs = require('fs');
var Idea = require('./models/Idea');
var User = require('./models/User');
var tokenSecret = 'your unique secret';
var moment = require('moment');
var jwt = require('jwt-simple');

mongoose.connect('mongodb://localhost/test'); 
app.set('port', process.env.port || 3000);
app.use(logger('dev'));
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}))
app.use(express.static('../client'));

function createJwtToken(user) {
  var payload = {
    user : user,
    iat  : new Date().getTime(),
    exp  : moment().add(7,'days').valueOf()
  };
  return jwt.encode(payload, tokenSecret);
}

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    }
});

var upload = multer({ storage: storage }).single('ideaPoster');

/** API path that will upload the files */
app.post('/api/addIdea', function(req, res, next) {
    upload(req,res,function(err){
        if(err){
             res.json({error_code:1,err_desc:err});
             return;
        }

        var idea             = new Idea();
        idea.title           = req.body.ideaTitle;
        idea.description     = req.body.ideaDescription;
        idea.poster          = "data:"+req.file.mimetype+";base64,"+new Buffer(fs.readFileSync(req.file.path)).toString('base64');      

        idea.save(function(err) {
            if (err) return next(err);
            res.sendStatus(200);
        });
    });
});

app.get('/api/getAllIdeas', function(req, res, next) {
	var query = Idea.find();

	query.exec(function(err, ideas) {
	    if (err) return next(err);
	    res.json(ideas);
	});
});

app.get('/api/getIdea/:id', function(req, res, next) {
  Idea.findById(req.params.id,function(err, idea) {
      if (err) return next(err);
      res.json(idea);
  });
});


app.post('/api/auth/signup', function(req, res, next) {
      var user = new User({
        displayName     : req.body.displayName,
        email           : req.body.email,
        password        : req.body.password
      });

      user.save(function(err) {
        if (err) return next(err);
        res.sendStatus(200);
      });
});

app.post('/api/auth/login', function(req, res, next) {
  User.findOne({ email: req.body.email }, function(err, user) {
    if (!user) return res.sendStatus(401, 'User does not exist');
    user.comparePassword(req.body.password, function(err, isMatch) {
      if (!isMatch) return res.sendStatus(401, 'Invalid email and/or password');
      var token = createJwtToken(user);
      res.json({ token: token });
    });
  });
});

app.get('*', function(req, res) {
  res.redirect('/#' + req.originalUrl);
});

app.listen(app.get('port'),function(){
  console.log("Express server started in port ", app.get('port'));
});
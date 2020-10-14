var express = require('express');
var path = require('path');
var http = require('http');
var app  = express();
var routes = require('./routes');
var bodyParser = require('body-parser');

app.set('view engine', 'pug');

app.use(function(res, req,next){
    req.name = 'SON';
    console.log('I AM A CUSTOM MIDDLEWARE');
    next();
});

app.get('/', function(request,response){
    response.render('index',{
        message:  'Hello world from express js'
    });
});

app.get('/world', function(request,response){
    response.send('world');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));

app.use('/hello',routes);
app.use('/aplicacao',express.static(path.join(__dirname, 'public')));

// app.listen(3000, function(){
//     console.log('Express started!');
// });

app.use(function(err,req,res,next){
    res.status(500)
    .json({
        message: 'Something wrong happens'
    });
});

http.createServer(app).listen(3000,function(){
    console.log('Express started!');
});
var express = require('express');
var router = express.Router();

router.use(function(res, req,next){
    console.log('I AM A ROUTER CUSTOM MIDDLEWARE');
    next();
});

// rota /hello
router.get('/', function(req,res,next){
    next(new Error('custom error'));
});

// rotas abaixo são do tipo => /hello/.....

router.get('/params/:name', function(req,res){
    res.json({
        params: req.params,
        host: req.hostname,
        headers: req.headers
    })
});

router.post('/body',function(req,res){
    res.json(req.body.name);
});

router.get('/a?r', function(req,res){
    res.send('route a?r');
});

router.get('/a+r', function(req,res){
    res.send('route a?r');
});

router.get('/a*r', function(req,res){
    res.send('route a?r');
});

module.exports = router;
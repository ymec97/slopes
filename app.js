const express = require ('express');
const hbs = require ('hbs');
var path = require("path");
const routes = require ('./routes');

var app = express();
var elevationPnt = "";
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/js'));
app.use(express.static(__dirname + '/public/images'));
app.use(express.static(__dirname + '/views'));


app.get('/', routes.getHomepage);
app.get('/mapeval/', routes.getElevation);
app.get('/map', routes.getMap);

app.get('/getFOV', (req,res)=>{
    req.body.param();
});

app.listen('3000', () =>{
    console.log('server is up');
});
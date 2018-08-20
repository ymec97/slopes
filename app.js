const express = require('express');
const hbs = require('hbs');
var path = require("path");
var bodyparser = require("body-parser");
var FOV = require("./controllers/FOVAlgo.js");
var app = express();
app.use(bodyparser.json());

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/js'));
app.use(express.static(__dirname + '/public/images'));
app.use(express.static(__dirname + '/public/stylesheet'));
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.render('index.hbs', {
        title: 'Welcome page',
        CurrentYear: new Date().getFullYear()

    });
});


app.get('/map', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/newMap.html'));
});

app.get('/getFOV', (req, res) => {
    marker = { Lat: req.query.markerLat, Lng: req.query.markerLng };
    //FOV.CreateMatrix(marker);
    //res.sendFile(path.join(__dirname+'/views/map.html'));
});

// app.get('/about', (req,res) =>{
//     res.render('about.hbs',{
//         pageTitle:'about page',
//         CurrentYear: new Date().getFullYear()
//     });
// });

app.listen('3000', () => {
    console.log('server is up');
});
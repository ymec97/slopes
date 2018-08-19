const express = require ('express');
const hbs = require ('hbs');
var path    = require("path");
const routes = require ('./routes');

var app = express();
var elevationPnt = "";
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/js'));
app.use(express.static(__dirname + '/public/images'));
app.use(express.static(__dirname + '/views'));

// app.on('mount', function initMap() {
//     var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
// });



console.log(elevationPnt); 

app.get('/', routes.getElevation);

// app.get('/map/:id', function(req, res) {
//     res.render('index.hbs',{
//         title:'Welcome page',
//         CurrentYear: new Date().getFullYear()

//     });
//     res.send('user ' + req.params.id);
//   });
  

app.get('/map', (req,res)=>{
    res.sendFile(path.join(__dirname+'/views/map.html'));
});

app.get('/getFOV', (req,res)=>{
    req.body.param();
    //res.sendFile(path.join(__dirname+'/views/map.html'));
});

// app.get('/about', (req,res) =>{
//     res.render('about.hbs',{
//         pageTitle:'about page',
//         CurrentYear: new Date().getFullYear()
//     });
// });

app.listen('3000', () =>{
    console.log('server is up');
});
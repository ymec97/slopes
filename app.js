const express = require ('express');
const hbs = require ('hbs');
var path    = require("path");

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/js'));
app.use(express.static(__dirname + '/public/images'));
app.use(express.static(__dirname + '/views'));

app.get('/', (req,res)=>{
    res.render('index.hbs',{
        title:'Welcome page',
        CurrentYear: new Date().getFullYear()

    });
});

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
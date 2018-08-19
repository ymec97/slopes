const express = require ('express');
const hbs = require ('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res)=>{
    res.render('index.hbs',{
        title:'Welcome page',
        CurrentYear: new Date().getFullYear()

    });
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
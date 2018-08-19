var request = require('request');

var getElevation = (req,res) => {
    var lan = req.query.lan;
    var lng = req.query.lng;
    request({
        url:`https://maps.googleapis.com/maps/api/elevation/json?locations=${lan},${lng}&key=AIzaSyDgRrVctuNSkH5H0kynTmjjrDu1DEuMOxI`,
        json: true
    }, (err,result,body) => {
        elevationPnt = body.results[0].elevation;
        console.log(elevationPnt);
    })
}

var getHomepage = (req,res) =>{
    res.render('index.hbs',{});
}

var getMap = (req,res) =>{
    res.render('map.hbs',{});
}

    module.exports = {
        getElevation,
        getHomepage,
        getMap
    }
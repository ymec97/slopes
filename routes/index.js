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

var getBestVantage = (locations) =>
{
  return locations.slice(0, 3)
}

var compareLocation = (a, b) =>
{
  if (a[0] > b[0])
  {
    return 1
  }
  else if (a[0] == b[0])
  {
    return 0
  }
  else {
    return -1
  }

}
// Returns a list of jsons
// "numOfTiles" - number of tiles overlapping a targetArea
// "area" - list of coordinates that overlap targetArea
var getOverlaps = (locations, targetArea) => {
  var areaList = [{
    coord, // The actual location of the point given
    numOfTiles, // Number of tiles it's matrix has that overlap the targetArea
    area // The coordinates that overlap the targetArea
  }];
  for (var locationsIndex = 0; locationsIndex < locations.length; locationsIndex++) {
    var numOfTilesInRange = 0;

    for (var coordinate = 0; coordinate < locations[locationsIndex].length; coordinate++)
    {
      if (!(coordinate.lat < targetArea[0].lat || coordinate.lat > targetArea[1].lat || coordinate.lng < targetArea[0].lng || coordinate.lng > targetArea[1].lng))
      {        // In range

        numOfTilesInRange++;
        areaList[locationsIndex].area.push(coordinate)
      }
      areaList[locationsIndex].numOfTiles = numOfTilesInRange
  }
  return areaList.sort(compareLocation)
}

}
    module.exports = {
        getElevation,
        getHomepage,
        getMap,
    }

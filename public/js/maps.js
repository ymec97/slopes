var request = require('request');

var map;
var rectangle;
var elevationPnt;

function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 30.65265, lng: 34.79749},
      zoom: 15,
      mapTypeId: 'satellite'
    });

    var bounds = {
    north: 30.65833,
    south: 30.64697,
    east: 34.80471,
    west: 34.79028
  };
  // Define the LatLng coordinates for the polygon's path.
    var triangleCoords = [
      {lat: 30.656773002911446, lng: 34.78415738626006},
      {lat: 30.66400853775304, lng: 34.79314815087798},
      {lat: 30.644641175921908, lng: 34.79604731702443},
      {lat:30.644641175921908, lng:34.79604731702443}
    ];

    // Construct the polygon.
    var bermudaTriangle = new google.maps.Polygon({
      paths: triangleCoords,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    });
    bermudaTriangle.setMap(map);

    rectangle = new google.maps.Rectangle({
    bounds: bounds,
    editable: true,
    draggable: true
  });

  rectangle.setMap(map);

  var myLatLng = {lat: 30.656773002911446, lng: 34.78415738626006};
  var myLatLng2 = {lat: 30.66400853775304, lng: 34.79314815087798};
  var myLatLng3 = {lat: 30.644641175921908, lng: 34.79604731702443};

  infoWindow1 = new google.maps.InfoWindow();
  infoWindow2 = new google.maps.InfoWindow();
  infoWindow3 = new google.maps.InfoWindow();

  var contentString1 = '<b>first postguard.</b><br>' +
            'lat: ' + myLatLng.lat + '<br>' +
            'lng: ' + myLatLng.lng + '<br>' +
            'height : ' + 810.6743 + ' meters';


    var contentString2 = '<b>second postguard.</b><br>' +
                        'lat: ' + myLatLng2.lat + '<br>' +
                        'lng: ' + myLatLng2.lng + '<br>' +
                        'height : ' + 807.639 + ' meters';

    var contentString3 = '<b>third postguard.</b><br>' +
                                    'lat: ' + myLatLng3.lat + '<br>' +
                                    'lng: ' + myLatLng3.lng + '<br>' +
                                    'height : ' + 799.992 + ' meters';

infoWindow1.setContent(contentString1);
infoWindow1.setPosition(myLatLng);
infoWindow1.open(map);

        infoWindow2.setContent(contentString2);
        infoWindow2.setPosition(myLatLng2);
        infoWindow2.open(map);

        infoWindow3.setContent(contentString3);
        infoWindow3.setPosition(myLatLng3);
        infoWindow3.open(map);

}



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

      // var drawingManager = new google.maps.drawing.DrawingManager({
      //   drawingMode: google.maps.drawing.OverlayType.MARKER,
      //   drawingControl: true,
      //   drawingControlOptions: {
      //     position: google.maps.ControlPosition.TOP_CENTER,
      //     drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
      //   },
      //   markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
      //
      // });
      //
      // drawingManager.setMap(map);



    // rectangle.addListener('click', function() {
    //     var h =0;
    //   });

    // Define a rectangle and set its editable property to true.

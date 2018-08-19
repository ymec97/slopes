function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 31.263433, lng: 34.810893},
      zoom: 9
    });

      var drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
        },
        markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
       
      });
      
      drawingManager.setMap(map);
      
      var bounds = {
      north: 31.463433,
      south: 31.363433,
      east: 34.810893,
      west: 34.610893
    };

    rectangle.addListener('click', function() {
        var h =0;
      });

    // Define a rectangle and set its editable property to true.
    var rectangle = new google.maps.Rectangle({
      bounds: bounds,
      editable: true,
      draggable: true
    });
    rectangle.setMap(map);
    
    
  }
var app = angular.module('myApp', []);

app.service('Map', function($q, $http) {
    
    this.initMap = function() {
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 31.263433, lng: 34.810893},
        zoom: 9,
      });

        

      var drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [ 'rectangle', 'marker'],
          editable: true,
          draggable: true
        }
       
      });
      
      drawingManager.setMap(this.map);
      
      var bounds = {
      north: 31.4634,
      south: 31.3634,
      east: 34.8108,
      west: 34.6103
    };

    // Define a rectangle and set its editable property to true.
    var rectangle = new google.maps.Rectangle({
      bounds: bounds,
      editable: true,
      draggable: true
    });
    rectangle.setMap( this.map);

    rectangle.addListener('mouseup', function(){
      this.rect = rectangle;
      alert("UP"); 
      $http({
            url: "/getFOV", 
            method: "GET",
            params: {b: this.rect.getBounds().b,f: this.rect.getBounds().f}
          });
    });

    // google.maps.event.addListener(drawingManager, 'markercomplete', function(marker, rectangle) {
    //   $http({
    //     url: "/getFOV", 
    //     method: "GET",
    //     params: {markerLat: marker.getPosition().lat() ,
    //            markerLng: marker.getPosition().lng()}
    //   });
    // });

    
   
    }
   
});

app.controller('newPlaceCtrl', function($scope, Map, $interval) { 
   $scope.initMap =  Map.initMap();

   $scope.SendData = function (){
      var rect = Map.rectangle;
   }
});


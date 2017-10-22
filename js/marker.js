"use strict";

var iconBase = "https://maps.google.com/mapfiles/kml/shapes/";
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: iconBase + "../img/icon-map-pin.svg"
  });

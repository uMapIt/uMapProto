import { Markers } from '../../imports/collections/markers';

Template.showListing.helpers({
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(35.159117, 129.045707),
        zoom: 11
      };
    }
  }
});

Template.showListing.onCreated(function() {

  GoogleMaps.ready('showListing', function(map) {

    var markers = {};
    var markerId = Session.get('marker');

    Markers.find({ _id: markerId }).observe({

      added: function(document) {
        var marker = new google.maps.Marker({
          draggable: false,
          animation: google.maps.Animation.DROP,
          position: new google.maps.LatLng(document.lat, document.lng),
          map: map.instance,
          id: document._id
        });

        markers[document._id] = marker;
      }
    });
  });
});

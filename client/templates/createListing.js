import { Markers } from '../../imports/collections/markers';

// TODO: use user's location to center map
Template.createListing.helpers({
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(35.159117, 129.045707),
        zoom: 11
      };
    }
  }
});

Template.createListing.onCreated(function() {

  var updateTimeout = null;
  var markerAdded = false;

  GoogleMaps.ready('createListing', function(map) {

    google.maps.event.addListener(map.instance, 'click', function(event) {
      updateTimeout = setTimeout(function() {
        if (!markerAdded) {
          Markers.insert({ lat: event.latLng.lat(), lng: event.latLng.lng() }, function(err, markerId) {

            Session.set('markerId', markerId);
            var markers = {};

            Markers.find({ _id: markerId }).observe({

              added: function(document) {
                var marker = new google.maps.Marker({
                  draggable: true,
                  animation: google.maps.Animation.DROP,
                  position: new google.maps.LatLng(document.lat, document.lng),
                  map: map.instance,
                  id: document._id
                });

                google.maps.event.addListener(marker, 'dragend', function(event) {
                  Markers.update(marker.id, { $set: { lat: event.latLng.lat(), lng: event.latLng.lng() }});
                });
                markers[document._id] = marker;
              },

              changed: function(newDocument, oldDocument) {
                markers[newDocument._id].setPosition({ lat: newDocument.lat, lng: newDocument.lng });
              }
            });

          });
          markerAdded = true;
        }
      }, 200);
    });

    // Prevents 'click' event from firing off first
    google.maps.event.addListener(map.instance, 'dblclick', function(event) {
      clearTimeout(updateTimeout);
    });
  });
});

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

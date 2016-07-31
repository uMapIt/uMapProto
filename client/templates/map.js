import { Markers } from '../../imports/collections/markers';

if (Meteor.isClient) {
  Session.setDefault('centerLat', 35.157354);
  Session.setDefault('centerLng', 129.059168);
  Session.setDefault('zoom', 13);

  GoogleMaps.setConfig('helpers.getInfoWindowContent', function(item) {
  return item.name || 'item-' + item._id;
  });

  GoogleMaps.setConfig('helpers.isInfoWindowOpen', function(item) {
    return Session.get('infoWindowShow-' + item._id);
  });

  Template.map.helpers({
    centerLat: function() {
      return Session.get('centerLat');
    },

    centerLng: function() {
      return Session.get('centerLng');
    },

    zoom: function() {
      return Session.get('zoom');
    }
  });

  Template.map.events({

    'map_click .map': function(event) {
      let lat = event.originalEvent.detail.lat;
      let lng = event.originalEvent.detail.lng;
      let icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + Math.floor(Math.random() * 10) + '|FF0000|FFFFFF';

      Meteor.call('markers.create', lat, lng, icon);
    }

  });


}

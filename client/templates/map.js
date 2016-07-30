import { Listings } from '../../imports/collections/listings';
import { Markers } from '../../imports/collections/markers';
import { Session } from 'meteor/session';

Session.set('centerLat', 35.157354);
Session.set('centerLng', 129.059168);
Session.set('zoom', 13);

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
  },
  items: function() {
    return Markers.find({ _id: "NsD4so6iC55aJ77tN" });
  }
});

Template.map.events({
  'map_click .map': function(event) {
    const lat = event.originalEvent.detail.lat;
    const lng = event.originalEvent.detail.lng;
    const icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + Math.floor(Math.random() * 10) + '|FF0000|FFFFFF';

    Meteor.call('markers.create', lat, lng, icon);
  }
});

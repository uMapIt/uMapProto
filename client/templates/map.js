import { Listings } from '../../imports/collections/listings';
import { Markers } from '../../imports/collections/markers';
import { Session } from 'meteor/session';

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
  },
  items: function() {
    const makerId = Session.get('makerId');
    console.log(`this is the session in the helper ${makerId}`);
    return Markers.find({ _id: "xnBZNQq5JbkbYJMJM" });
  }
});

Template.map.events({
  'map_click .map': function(event) {
    const lat = event.originalEvent.detail.lat;
    const lng = event.originalEvent.detail.lng;
    const icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + Math.floor(Math.random() * 10) + '|FF0000|FFFFFF';

    Meteor.call('markers.create', lat, lng, icon, function(err, makerId) {
      console.log(`this is the session in the call ${makerId}`);
      Session.set('makerId', makerId);
    });
  }
});

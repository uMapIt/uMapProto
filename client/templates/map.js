import { Listings } from '../../imports/collections/listings';
import { Markers } from '../../imports/collections/markers';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';

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
  items: Tracker.autorun(function() {
      console.log(`in the helper ${Session.get('markerId')}`);
      return Markers.find({ _id: Session.get('markerId') });
  })
});

Template.map.events({
  'map_click .map': function(event) {
    const lat = event.originalEvent.detail.lat;
    const lng = event.originalEvent.detail.lng;
    const icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + Math.floor(Math.random() * 10) + '|FF0000|FFFFFF';

    Meteor.call('markers.create', lat, lng, icon, function(err, markerId) {
      Session.set('markerId', markerId);
      console.log(`in the call ${Session.get('markerId')}`);
    });
  }
});

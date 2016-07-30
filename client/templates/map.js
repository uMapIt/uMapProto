import { Listings } from '../../imports/collections/listings';
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
  item: function() {
    const id = Session.get('listId');
    return Listings.findOne({ _id: id });
  }
});

Template.map.events({
  'map_click .map': function(event) {
    const lat = event.originalEvent.detail.lat;
    const lng = event.originalEvent.detail.lng;
    console.log(`this is the lat ${lat} and the lng ${lng}`);
    Meteor.call('listings.create', lat, lng);
  }
});

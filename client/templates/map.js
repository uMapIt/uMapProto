import { Markers } from '../../imports/collections/markers';
import { ReactiveVar } from 'meteor/reactive-var';

if (Meteor.isClient) {
  Session.setDefault('centerLat', 35.157354);
  Session.setDefault('centerLng', 129.059168);
  Session.setDefault('zoom', 13);
  Session.setDefault('makerId', '');

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
      return Template.instance().markers();
    }
  });

  Template.map.onCreated(function() {
    let instance = this;

    instance.autorun(function() {
      let subscription = instance.subscribe('markers.all');
    });

    instance.markers = function() {
      return Markers.find({});
    }
  });

  Template.map.events({

    'map_click .map': function(event) {
      let lat = event.originalEvent.detail.lat;
      let lng = event.originalEvent.detail.lng;
      let icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + Math.floor(Math.random() * 10) + '|FF0000|FFFFFF';

      Meteor.call('markers.create', lat, lng, icon, (err, markerId) => {
        Session.set('markerId', markerId);
      });
    }

  });


}

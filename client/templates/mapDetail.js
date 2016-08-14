import { Markers } from '../../imports/collections/markers';
import { ReactiveVar } from 'meteor/reactive-var';

if (Meteor.isClient) {
  Session.setDefault('centerLat', 35.157354);
  Session.setDefault('centerLng', 129.059168);
  Session.setDefault('zoom', 13);
  Session.setDefault('makerId', '');

  GoogleMaps.setConfig('helpers.getInfoWindowContent', function(item) {
  return item.name || 'item-' + item._id;
  });

  GoogleMaps.setConfig('helpers.isInfoWindowOpen', function(item) {
    return Session.get('infoWindowShow-' + item._id);
  });

  Template.mapDetail.helpers({
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

  Template.mapDetail.onCreated(function() {
    let instance = this;

    instance.autorun(function() {
      let subscription = instance.subscribe('markers.all');
    });

    instance.markers = function() {
      return Markers.find({_id: Session.get('marker')});
    }
  });

}

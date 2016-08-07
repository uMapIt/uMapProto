import { Mongo } from 'meteor/mongo';
import { check, Match } from 'meteor/check';

Meteor.methods({
  'markers.create': function(lat, lng, icon) {
    return Markers.insert({
      lat: lat,
      lng: lng,
      draggable: true,
      icon: icon
    });
  }
});

export const Markers = new Mongo.Collection('markers');

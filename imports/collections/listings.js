import { Mongo } from 'meteor/mongo';
import { check, Match } from 'meteor/check';

Meteor.methods({
  'listings.create': function(lat, lng) {
    Listings.insert({
      title: '',
      category: '',
      city: '',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      lat: lat,
      lng: lng,
      flagged: false,
      draggable: true,
      icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + Math.floor(Math.random() * 10) + '|FF0000|FFFFFF',
      user: this.userId,
      images: [],
      comments: []
    });
  }
});

export const Listings = new Mongo.Collection('listings');

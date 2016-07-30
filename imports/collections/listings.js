import { Mongo } from 'meteor/mongo';
import { check, Match } from 'meteor/check';

Meteor.methods({
  'listings.create': function(lat, lng, icon) {
    return Listings.insert({
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
      icon: icon,
      user: this.userId,
      images: [],
      comments: [],
      tags: []
    });
  }
});

export const Listings = new Mongo.Collection('listings');

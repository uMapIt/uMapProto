import { Mongo } from 'meteor/mongo';
import { check, Match } from 'meteor/check';
import { Session } from 'meteor/session';

Meteor.methods({
  'listings.create': function(title, category, city, description) {
    Listings.insert({
      title: title,
      category: category,
      city: city,
      description: description,
      createdAt: new Date(),
      updatedAt: new Date(),
      user: this.userId,
      images: [],
      comments: [],
      tags: []
    });
  }
});

export const Listings = new Mongo.Collection('listings');

import { Mongo } from 'meteor/mongo';
import { check, Match } from 'meteor/check';
import { Session } from 'meteor/session';

Meteor.methods({
  'listings.create': function(title, category, city, description, marker, userFullName, userProfilePicture) {
    return Listings.insert({
      title: title,
      category: category,
      city: city,
      description: description,
      createdAt: new Date(),
      updatedAt: new Date(),
      user: this.userId,
      userFullName: userFullName,
      userProfilePicture: userProfilePicture,
      marker: marker,
      images: [],
      comments: [],
      tags: []
    });
  }
});

export const Listings = new Mongo.Collection('listings');

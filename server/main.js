import { Meteor } from 'meteor/meteor';
import { Listings } from '../imports/collections/listings';
import { Markers } from '../imports/collections/markers';

Meteor.startup(() => {
  Meteor.publish('listings', function() {
    return Listings.find({});
  });
});

import { Meteor } from 'meteor/meteor';
import { Listings } from '../imports/collections/listings';
import { Markers } from '../imports/collections/markers';

Meteor.startup(() => {
  Meteor.publish('listings', function() {
    return Listings.find({});
  });

  Meteor.publish('markers.all', function() {
    return Markers.find({});
  });

  Accounts.onCreateUser(function(options, user) {
    if (options.profile) {
        options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?width=200&height=200";
        user.profile = options.profile;
    }
    return user;
});

});

import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Listings } from '../../../imports/collections/listings';
import ListingsViewTile from './ListingsViewTile';

class ListingsView extends Component {

  render() {
    return (
      <div className="row">
        <div className="feed">          
          {this.props.listings.map(listing => <ListingsViewTile key={listing._id} listing={listing} />)}
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('listings');
  return { listings: Listings.find({}, {sort: {createdAt: -1 }}).fetch() };
}, ListingsView);

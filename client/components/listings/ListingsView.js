import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Listings } from '../../../imports/collections/listings';
import ListingsViewTile from './ListingsViewTile';
import CoverImage from '../cover/cover-image';

class ListingsView extends Component {

  render() {
    return (
      <div>
        <CoverImage />
        <div className="row">
          <div className="col-lg-12">
              <h3>Latest Submissions</h3>
          </div>
        </div>
        <div className="row text-center">
          {this.props.listings.map(listing => <ListingsViewTile key={listing._id} listing={listing} />)}
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('listings');
  return { listings: Listings.find({}, {sort: { createdAt: -1 }}).fetch() };
}, ListingsView);

import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Listings } from '../../../imports/collections/listings';
import ListViewTile from './list-view-tile';

class ListView extends Component {

  render() {
    return (
      <div className="row">
        <div className="feed colxs-12">
          {this.props.listings.map(listing => <ListViewTile key={listing._id} listing={listing} />)}
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('listings');
  return { listings: Listings.find({}, {sort: {createdAt: -1 }}).fetch() };
}, ListView);

/*
<div classNameNameName="container">
  <h1>List View</h1>
  <div classNameNameName="row">
    {this.props.listings.map(listing => <ListViewTile key={listing._id} listing={listing} />)}
  </div>
</div>
*/

import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Listings } from '../../../imports/collections/listings';

class ListingDetail extends Component {
  render() {
    if (!this.props.listing) {
      return <div>Loading...</div>
    }
    const { title, category, city, description } = this.props.listing;
    return (
      <div className="container">
        <h1>{title}</h1>
        <h3>{`Posted in ${category} for ${city}`}</h3>
        <p>{description}</p>
      </div>
    );
  }
}

export default createContainer((props) => {
  const { listingId } = props.params;
  Meteor.subscribe('listings');
  return { listing: Listings.findOne(listingId) };
}, ListingDetail);

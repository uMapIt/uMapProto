import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Listings } from '../../../imports/collections/listings';
import Blaze from 'meteor/gadicc:blaze-react-component';

class ListingsDetail extends Component {
  render() {
    if (!this.props.listing) {
      return <div>Loading...</div>
    }
    const { title, category, city, description, marker } = this.props.listing;
    Session.set('marker', marker);
    return (
      <div className="row">
        <div className="col-md-8">
          <h1>{title}</h1>
          <h3>{`Posted in ${category} for ${city}`}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default createContainer((props) => {
  const { listingId } = props.params;
  Meteor.subscribe('listings');
  return { listing: Listings.findOne(listingId) };
}, ListingsDetail);

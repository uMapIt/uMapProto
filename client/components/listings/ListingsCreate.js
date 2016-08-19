import React, { Component } from 'react';
import Blaze from 'meteor/gadicc:blaze-react-component';
import { Link, browserHistory } from 'react-router';

class CreateListing extends Component {
  constructor(props) {
    super(props);
    this.state = { err: '' }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, category, city, description } = this.refs;
    const marker = Session.get('markerId');
    Meteor.call('listings.create', title.value, category.value, city.value, description.value, marker, (err, listingId) => {
      browserHistory.push(`/listings/${listingId}`)
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Add a Restaurant or Bar</h1>
            <p className="lead">Locate the place on the map. Drop a pin. Fill in the details.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="map-container">
              <Blaze template="createListing" />
            </div>
            <div className="text-danger">
              {this.state.err}
            </div>
          </div>
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <label>Listing Title</label>
                <input ref="title" className="form-control" />
                <label>Category</label>
                <input ref="category" className="form-control" />
                <label>City</label>
                <input ref="city" className="form-control" />
                <label>Description</label>
                <input type="textarea" ref="description" className="form-control" />
                <button className="btn btn-primary create-button">Map Yourself!</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateListing;

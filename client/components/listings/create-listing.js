import React, { Component } from 'react';
import Blaze from 'meteor/gadicc:blaze-react-component';

class CreateListing extends Component {
  constructor(props) {
    super(props);
    this.state = { err: '' }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs.title.value);
  }

  render() {
    return (
      <div className="container">
        <h1>Create A New Listing</h1>
        <Blaze template="map" />
        <div className="text-danger">
          {this.state.err}
        </div>
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
            <button className="btn btn-primary">Map Yourself!</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateListing;

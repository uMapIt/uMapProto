import React, { Component } from 'react';
import { Link } from 'react-router';

class ListViewTile extends Component {
  render() {
    return (
      <div className="col-md-4">
        <h3><Link to={`/listings/${this.props.listing._id}`}>{this.props.listing.title}</Link></h3>
      </div>
    );
  }
}

export default ListViewTile;

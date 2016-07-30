import React, { Component } from 'react';

class ListViewTile extends Component {
  render() {
    return (
      <div className="col-md-4">
        <h3>{this.props.listing.title}</h3>
      </div>
    );
  }
}

export default ListViewTile;

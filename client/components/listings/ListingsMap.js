import React, { Component } from 'react';
import Blaze from 'meteor/gadicc:blaze-react-component';

class ListingsMap extends Component {
  render() {
    return (
      <Blaze template="map" />
    );
  }
}

export default ListingsMap;

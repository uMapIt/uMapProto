import React, { Component } from 'react';
import { Link } from 'react-router';

class ListingsViewTile extends Component {
  render() {
    return (
      <div className="col-sm-6 col-md-4 hero-feature">
        <div className="thumbnail">
          <img className="image" src="https://s3.ap-northeast-2.amazonaws.com/umapit/img_user02.jpg" alt={this.props.listing.title} />
          <div className="caption">
            <h3>{this.props.listing.title}</h3>
            <img src={this.props.listing.userProfilePicture} className="img-circle img-responsive" />
            <p>{this.props.listing.description}</p>
            <p>
              <Link to={`/listings/${this.props.listing._id}`}><a className="btn btn-primary">View</a></Link> <a href="#" className="btn btn-default">Report</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingsViewTile;

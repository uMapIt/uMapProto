import React, { Component } from 'react';
import { Link } from 'react-router';

class ListingsViewTile extends Component {
  render() {
    return (
      <div className="feed-item col-md-3">
        <img className="user-icon" src="https://s3.ap-northeast-2.amazonaws.com/umapit/user_pic.png" />
        <a className="user-name" href="">Stephen Mayeux</a>
        <Link className="location-name" to={`/listings/${this.props.listing._id}`}>{this.props.listing.title}</Link>
        <img className="location-thumbnail img-responsive" src="https://s3.ap-northeast-2.amazonaws.com/umapit/img_user02.jpg" />
        <p className="about-post"><span className ="time-stamp">45 mins ago</span> to <a className="category" href="">{this.props.listing.category}</a> in
            <a className="location-post" href="">{this.props.listing.city}</a>
        </p>
        <a className = "flag-post" href =""><img className="flag-icon" src ="https://s3.ap-northeast-2.amazonaws.com/umapit/icon_flag.png" /></a>
        <a className="comment-post" href =""><img className="comment-icon" src ="https://s3.ap-northeast-2.amazonaws.com/umapit/icon_chat.png" /></a>
      </div>
    );
  }
}

export default ListingsViewTile;

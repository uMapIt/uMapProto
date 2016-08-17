import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

import Accounts from '../accounts/accounts';

class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link to="/" className="navbar-brand">uMapiT</Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              { this.props.currentUser ?
                <ul className="nav navbar-nav">
                    <li>
                        <Accounts />
                    </li>
                    <li>
                        <Link to="/create">Add A Restaurant</Link>
                    </li>
                </ul> :
                <ul className="nav navbar-nav">
                    <li>
                        <Accounts />
                    </li>
                </ul>
              }
            </div>
        </div>
      </nav>
    );
  }
}

export default createContainer(() => {
  return {
    currentUser: Meteor.user()
  };
}, Header);

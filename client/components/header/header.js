import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import Accounts from '../accounts';
import SearchBar from './search_bar';

class Header extends Component {

  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">uMapIt</Link>
        </div>
        <ul className="nav navbar-nav">
          <li><button id="add-new-listing" type="button" className="btn btn-success">Map It!</button></li>
          <li><Accounts /></li>
          <li><SearchBar /></li>
          <li><i className="fa fa-list-ul"></i></li>
          <li><i className="fa fa-map-o"></i></li>
        </ul>
      </nav>
    );
  }
}

export default Header;

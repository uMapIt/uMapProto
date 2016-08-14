import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import Accounts from '../accounts';

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
                <Link to="/"><a className="navbar-brand">Start Bootstrap</a></Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <Accounts />
                    </li>
                    <li>
                        <a href="#">Create</a>
                    </li>
                    <li>
                        <a href="#">Map View</a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    );
  }
}

export default Header;

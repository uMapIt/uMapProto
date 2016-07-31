import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import Accounts from '../accounts';
import SearchBar from './search-bar';

class Header extends Component {

  render() {
    return (
      <nav id="navbar" className="navbar">
        <div className="row">
         <div id="" className="nav-wrapper navbar col-xs-12">
           <img className="navbar-brand pull-*-left col-xs-3" id="logo" src="https://s3.ap-northeast-2.amazonaws.com/umapit/logowhite.png" />
            <div className= "header-search col-xs-4">
                <form id = "search">
                    <span><input type="text" className="search-round" placeholder="Search Maps..." required /></span>
                </form>
            </div>
            <div className="header-right col-xs-4">
                <ul className="nav navbar-nav">
                    <li><a id ="mapview" href=""><img id="mapicon" src="https://s3.ap-northeast-2.amazonaws.com/umapit/icon_map.png" /></a></li>
                    <li><button className="btn sign-button" href="">Sign In/Up</button></li>
                </ul>
            </div>
         </div>
        </div>
    </nav>
    );
  }
}

export default Header;

/*<nav className="nav navbar-default">
  <div className="navbar-header">
    <Link to="/" className="navbar-brand">uMapIt</Link>
  </div>
  <ul className="nav navbar-nav">
    <li><button id="add-new-listing" type="button" className="btn btn-success"><Link to="/create">Map It!</Link></button></li>
    <li><Accounts /></li>
    <li><SearchBar /></li>
    <li><i className="fa fa-list-ul"></i></li>
    <li><i className="fa fa-map-o"></i></li>
  </ul>
</nav>*/

import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import Accounts from '../accounts';

class Header extends Component {

  render() {
    return (
      <nav id="navbar" className="navbar">
          <div className="row">
           <div id="" className="nav-wrapper navbar">
             <Link to='/' ><img className="navbar-brand pull-*-left col-xs-3" id="logo" src="https://s3.ap-northeast-2.amazonaws.com/umapit/logowhite.png" /></Link>
              <div className= "header-search col-xs-4">
                  <form id = "search">
                      <span><input  type="text" className="search-round" placeholder="Search Maps..." required /></span>
                  </form>
              </div>
              <div className="header-right col-xs-4">
                  <ul className="nav navbar-nav">
                      <li><a id ="mapview" href=""><img id="mapicon" src="https://s3.ap-northeast-2.amazonaws.com/umapit/icon_map.png" /></a></li>
                      <li><button classNameName="btn sign-button in" href="">Sign In</button></li>
                      <li><button className="btn sign-button up" href=""><span id="sign-up">Sign Up</span></button></li>
                  </ul>
              </div>
           </div>
          </div>
      </nav>
    );
  }
}

export default Header;

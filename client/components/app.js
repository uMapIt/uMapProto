import React from 'react';

import Header from './header/header';
import CoverImage from './cover/cover-image';

export default (props) => {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <CoverImage />
      </div>
      <div className="container">
          {props.children}
        {/*<div className='row footer'>}
          <span className='col-xs-4 cr'>&#169; 2016 uMAPiT Team</span>
          <p className='col-xs-4 cc'>Landing image courtesy <a href ="http://www.anujmadan.com/">www.anujmadan.com</a></p>
          <span className='col-xs-4 rh'>
            <a href='url' target='_blank'>Legal</a> | <a href='url' target='_blank'>Privacy</a> | <a href='url' target='_blank'>Contact</a>
          </span>
        {</div>*/}
      </div>
    </div>
  );
};

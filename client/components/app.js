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
        <div className="row">
          {props.children}
        </div>
        <div className='row footer'>
          <span className='col-xs-6 cr'>&#169; 2016 uMAPiT Team</span>
          <span className='col-xs-6 rh'>
            <a href='url' target='_blank'>Legal</a> | <a href='url' target='_blank'>Privacy</a> | <a href='url' target='_blank'>Contact</a>
          </span>
        </div>
      </div>
    </div>
  );
};
